package studentblog.blog.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import studentblog.blog.model.Blog;

@Service
public interface BlogRepository extends CrudRepository<Blog,Long> {

}
