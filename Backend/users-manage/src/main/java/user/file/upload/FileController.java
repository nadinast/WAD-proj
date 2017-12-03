package user.file.upload;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import ch.qos.logback.core.net.SyslogOutputStream;
import user.file.upload.error.FileExistsException;
import user.file.upload.error.FileNotSavedException;


@RestController
@RequestMapping("/api/files")
public class FileController {

	@Autowired
	StorageService storageService;
	
	@Bean
	public StorageService storage() {
		return new StorageService();
	}
	
	@PostMapping("/store")
	public ResponseEntity<String> storeFile(@RequestParam("configFile") MultipartFile file) {
		String message = "";
		try {
			storageService.store(file);
			message = "You successfully uploaded " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (Exception e) {
			message = file.getOriginalFilename() + " could not be uploaded!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
		}
	}
	
	@PostMapping("/save/{fileName}")
	public ResponseEntity<String> saveFile(@PathVariable("fileName") String name, @RequestBody String text){
		name = name + ".txt";
		String message = "";
		try {
			storageService.save(text, name);
			message = "You successfully uploaded " + name + "!";
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} catch (FileExistsException e) {
			message = e.getMessage();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(message);
		}catch(FileNotSavedException e) {
			message = e.getMessage();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(message);
		}
		
	}
	
	
	@GetMapping("/load")
	public ResponseEntity<Map<String, Object>> getFiles(Model model) {
		model.addAttribute("files", storageService.loadAll().map(
                path -> MvcUriComponentsBuilder.fromMethodName(FileController.class,
                        "getFile", path.getFileName().toString()).build().toString())
                .collect(Collectors.toList()));
		return ResponseEntity.ok().body(model.asMap());
	}
	
	
	@GetMapping("/load/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> getFile(@PathVariable String filename) {
		Resource file = storageService.loadFile(filename);
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
				.body(file);
	}
	
	
	@GetMapping("/load/content/{filename}")
	public String getFileContent(@PathVariable("filename") String filename) {
		filename = filename + ".txt";
		 try {
			 Resource file = storageService.loadFile(filename);
		     return getContent(file);
		 } catch (Exception e) {
			 e.printStackTrace();
			 return "";
		 }
	}
	
	private String getContent(Resource file) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream()),1024);
        StringBuilder stringBuilder = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            stringBuilder.append(line).append(System.lineSeparator());
        }
        br.close();
        return stringBuilder.toString();
	}
}
