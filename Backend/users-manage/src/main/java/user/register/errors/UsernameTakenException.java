package user.register.errors;

@SuppressWarnings("serial")
public class UsernameTakenException extends Exception {

	public UsernameTakenException(String msg) {
		super(msg);
	}
}
