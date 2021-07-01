package studentblog.blog.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="blogs")
public class Blog {

	@Id
	@GeneratedValue
	@Column(name="id")
	private long id;
	@Column(name="username")
	private String username;
	@Column(name="post_data")
	private String date;
	@Column(name="blog_desc")
	private String desc;
}
