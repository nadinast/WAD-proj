package user.register;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import user.register.errors.EmailUsedException;
import user.register.errors.PasswordsDontMatchException;
import user.register.errors.UsernameTakenException;

@RestController
@RequestMapping("/api/register")
public class UserController {
	
	@Autowired
	private RegisterService userService;

	@GetMapping(value = "/{username}")
	public User getUserByUsername(@PathVariable("username") String username) {
		return userService.getUserByUsername(username);
	}
	
	@PostMapping(value = "/user")
	public String createUser(@RequestBody User user) 
			throws PasswordsDontMatchException, UsernameTakenException, EmailUsedException {
		return userService.createUser(user);	
	}
	
	@ExceptionHandler(PasswordsDontMatchException.class)
	public void handlePasswordNotConfirmed(PasswordsDontMatchException ex, HttpServletResponse resp) throws IOException {
		resp.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
	}
	
	@ExceptionHandler(UsernameTakenException.class)
	public void handleUsernameTaken(UsernameTakenException ex, HttpServletResponse resp) throws IOException {
		resp.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
	}
	
	@ExceptionHandler(EmailUsedException.class)
	public void handleEmailUsed(EmailUsedException ex, HttpServletResponse resp) throws IOException {
		resp.sendError(HttpStatus.BAD_REQUEST.value(), ex.getMessage());
	}
	
}
