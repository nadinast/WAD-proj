package user.register.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import user.login.LoginService;
import user.register.RegisterService;

@Configuration
@EnableWebSecurity 
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	 @Autowired
	 private LoginService loginService;
	
	 @Bean
	 public BCryptPasswordEncoder bCryptPasswordEncoder() {
	     return new BCryptPasswordEncoder();
	 }
	 
	 @Autowired
	 public void configureAuth(AuthenticationManagerBuilder auth) throws Exception{
		 auth.userDetailsService(loginService).passwordEncoder(bCryptPasswordEncoder());
	 }
	
	 @Override
	 protected void configure(HttpSecurity http) throws Exception {
	     http.authorizeRequests()
	     		 .antMatchers("/api/files/**").hasRole("USER")
		         .antMatchers("/api/register/*").permitAll()
		         .antMatchers("/api/login").permitAll()
		         .antMatchers("/api/statistics/**").permitAll()
		         .anyRequest().authenticated();
//	         .and()
//		         .logout()
//		         .permitAll();
	     http.csrf().disable();
	 }
}
