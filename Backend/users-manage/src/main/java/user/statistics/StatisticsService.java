package user.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.register.UserRepository;

@Service
public class StatisticsService {
	
	@Autowired
	private UserRepository userRepository;
	
	public long getNumOfUsers() {
		return userRepository.count();
	}
	
	public long getNumOfUsersThatUse(String email) {
		return userRepository.findByEmailDomain(email);
	}
	
}
