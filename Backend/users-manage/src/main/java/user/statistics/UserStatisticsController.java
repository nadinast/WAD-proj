package user.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/statistics")
public class UserStatisticsController {
	
	@Autowired
	private StatisticsService statService;
	
	@GetMapping("/general/users")
	public long getNumOfUsers() {
		return statService.getNumOfUsers();
	}
	
	@GetMapping("/email/{user_email}")
	public long getNumOfUsersThatUse(@PathVariable("user_email") String userEmail) {
		return statService.getNumOfUsersThatUse(userEmail); 
	}
}
