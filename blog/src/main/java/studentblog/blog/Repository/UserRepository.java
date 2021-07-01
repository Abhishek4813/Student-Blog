package studentblog.blog.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import studentblog.blog.model.Users;

@Service
public interface UserRepository extends CrudRepository<Users,String>{

}
