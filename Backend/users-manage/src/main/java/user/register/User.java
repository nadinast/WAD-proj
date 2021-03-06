package user.register;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import user.file.upload.ConfigFile;


@Entity
@Table(name = "user")
public class User {
	
	private Long id;
	private String lastName;
	private String firstName;
	private String username;
    private String email;
    private String password;
    private Set<ConfigFile> file;
    
    @Transient
    private String confirmPassword;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	@Transient
	public String getConfirmPassword() {
		return confirmPassword;
	}

	@Transient
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
	
	public void setFile(Set<ConfigFile> file) {
		this.file = file;
	}
	
	@OneToMany(mappedBy = "user")
	public Set<ConfigFile> getFile() {
		return file;
	}
	
	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", username=" + username + ", email=" + email + "]";
	}

	

	
	
}
