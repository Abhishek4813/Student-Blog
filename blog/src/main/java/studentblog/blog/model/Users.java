package studentblog.blog.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="users")
public class Users {
	
	@Column(name="name")
	private String username;
	
	@Id
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
}
