package user.register;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByUsername(String username);
	User findByEmail(String email);
	
	@Query("SELECT COUNT(u) FROM User u WHERE u.email LIKE CONCAT('%', :email, '%')")
	long findByEmailDomain(@Param("email") String email);
	
}
