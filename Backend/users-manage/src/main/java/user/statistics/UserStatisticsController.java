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
	public String getNumOfUsers() {
		return "Current number of users: " + statService.getNumOfUsers();
	}
	
	@GetMapping("/email/{user_email}")
	public String getNumOfUsersThatUse(@PathVariable("user_email") String userEmail) {
		System.out.println(userEmail);
		return "Current users using " + userEmail + ": " + statService.getNumOfUsersThatUse(userEmail); 
	}
}
