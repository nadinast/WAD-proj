package user.file.upload;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;
import java.util.stream.Stream;

import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import user.register.UserRepository;

@Service
public class StorageService {
	
	@Autowired
	private FileRepository fileRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	private Path rootLocation;
	
	private final Logger log = LoggerFactory.getLogger(this.getClass());
	
	public void store(MultipartFile file) {
		init();
		try {
			Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
			/*ConfigFile configFile = new ConfigFile((new Random()).nextLong(),
													file.getOriginalFilename(), 
													rootLocation.toString() + file.getOriginalFilename(), 
													userRepo.findByUsername(username));
			System.out.println(configFile.toString());
			fileRepo.save(configFile);*/
		} catch (Exception e) {
			log.warn("File not stored");
		}
	}
	
	public Resource loadFile(String filename) {
		rootLocation = Paths.get("upload-" + SecurityContextHolder.getContext().getAuthentication().getName());
		System.out.println(rootLocation.toString());
		try {
			Path file = rootLocation.resolve(filename);
			Resource resource = new UrlResource(file.toUri());
			if (resource.exists() || resource.isReadable()) {
				return resource;
			} 
			else {
				log.warn("Resource not loaded");
				return null;
			}
		} catch (MalformedURLException e) {
			log.warn("Resource not loaded");
			return null;
		}
	}
	
	public Stream<Path> loadAll() {
		rootLocation = Paths.get("upload-" + SecurityContextHolder.getContext().getAuthentication().getName());
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));
        }
        catch (IOException e) {
            log.warn("File not found");
           throw new RuntimeException();
        }

    }
	
	public void init() {
		rootLocation = Paths.get("upload-" + SecurityContextHolder.getContext().getAuthentication().getName());
		try {
			Files.createDirectory(rootLocation);
		} catch (IOException e) {
			log.info("Directory " + rootLocation + " already exists");
		}
	}

}
