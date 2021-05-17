package kr.co.dotman.dotreactadmin.posts;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = PostProjection.class)
public interface PostRepository extends PagingAndSortingRepository<Post,Long> {

}