package user.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import user.register.User;
import user.register.UserRepository;

@Service
public class LoginService implements UserDetailsService{
	
	@Autowired 
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("Username: " + username);
		User user = userRepository.findByUsername(username);
		if(username == null)
			throw new UsernameNotFoundException(username);
		return new UserDetailsImpl(user);
	}
}
