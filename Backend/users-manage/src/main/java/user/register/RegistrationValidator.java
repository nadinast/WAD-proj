package user.register;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class RegistrationValidator implements Validator {
	
	@Autowired
    private RegisterService registerService;
	
	@Override
	public boolean supports(Class<?> arg0) {
		return User.class.equals(arg0);
	}

	@Override
	public void validate(Object o, Errors err) {
		User user = (User) o;
		
        if (user.getUsername().length() < 3 || user.getUsername().length() > 20) 
            err.rejectValue("username", "Size.userForm.username");

        if(!user.getPassword().equals(user.getConfirmPassword()))
        	err.rejectValue("password", "Diff.userForm.password");
		
	}

}
