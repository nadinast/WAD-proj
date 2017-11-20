package user.register;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import user.register.errors.EmailUsedException;
import user.register.errors.PasswordsDontMatchException;
import user.register.errors.UsernameTakenException;

@Service
public class RegisterService {
	
	private static final String PASSWORD_ERROR = "Passwords do not match!";
	private static final String USERNAME_ERROR = "Username already exists!";
	private static final String EMAIL_ERROR = "Email already used!";
	
	@Autowired 
	private UserRepository userRepository;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public User getUserByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	public String createUser(User user) 
			throws PasswordsDontMatchException, UsernameTakenException, EmailUsedException {
		String encryptedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		
		if(passwordMatched(encryptedPassword, user.getConfirmPassword())) {
			if(usernameNotTaken(user.getUsername())){
				if(emailNotUsed(user.getEmail())) {
					userRepository.save(user);
				}
				else throw new EmailUsedException(EMAIL_ERROR);
			}
			else throw new UsernameTakenException(USERNAME_ERROR);
		}
		else throw new PasswordsDontMatchException(PASSWORD_ERROR);
		return user.toString();
	}
	
	private boolean emailNotUsed(String email) {
		if(userRepository.findByEmail(email) == null)
			return true;
		return false;
	}

	private boolean usernameNotTaken(String username) {
		if(userRepository.findByUsername(username) == null)
			return true;
		return false;
	}

	private boolean passwordMatched(String encrypted, String confirmed) {
		if(bCryptPasswordEncoder.matches(confirmed, encrypted))
			return true;
		return false;
	}
}
