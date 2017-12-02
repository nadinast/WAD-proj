package user.file.upload;

import org.springframework.data.jpa.repository.JpaRepository;

import user.register.User;

public interface FileRepository extends JpaRepository<ConfigFile, Long>{
	ConfigFile findByName(String name);
	ConfigFile findByUser(User user);
}
