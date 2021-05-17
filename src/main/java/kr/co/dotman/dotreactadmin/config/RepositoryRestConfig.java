package kr.co.dotman.dotreactadmin.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import kr.co.dotman.dotreactadmin.posts.Post;

@Configuration
public class RepositoryRestConfig implements RepositoryRestConfigurer{
  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config){
      config.exposeIdsFor(Post.class);
  }
}

