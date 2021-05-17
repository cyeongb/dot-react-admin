package kr.co.dotman.dotreactadmin.products;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = ProductProjection.class)
public interface ProductRepository {
    
}
