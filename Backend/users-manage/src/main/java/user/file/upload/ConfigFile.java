package user.file.upload;

import java.net.URL;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import user.register.User;

@Entity
@Table(name = "config_file")
public class ConfigFile {

	private long id;
	private String name;
	private String path;
	private User user;
	
	
	public ConfigFile(long id, String name, String path, User user) {
		this.id = id;
		this.name = name;
		this.path = path;
		this.user = user;
	}

	@Id
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	

	@Column(name = "cf_name")
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	
	@ManyToOne()
	@JoinColumn(name = "user_id")
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "ConfigFile [id=" + id + ", name=" + name + ", path=" + path + ", user=" + user + "]";
	}

}
