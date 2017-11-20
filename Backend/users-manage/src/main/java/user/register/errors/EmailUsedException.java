package user.register.errors;

@SuppressWarnings("serial")
public class EmailUsedException extends Exception {
	public EmailUsedException(String msg) {
		super(msg);
	}
}
