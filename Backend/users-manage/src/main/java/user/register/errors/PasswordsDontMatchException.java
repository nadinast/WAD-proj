package user.register.errors;

@SuppressWarnings("serial")
public class PasswordsDontMatchException extends Exception {
	
	public PasswordsDontMatchException(String msg) {
		super(msg);
	}
}
