package user.register;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/files")
public class FileController {

	List<ConfigFile> files = new ArrayList<ConfigFile>();
	
	@PostMapping("/store")
	public String storeFile(@RequestBody ConfigFile file) {
		return file.toString();
	}
	
	@GetMapping("/load")
	public String getFiles() {
		return files.toString();
	}
}
