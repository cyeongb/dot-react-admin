package kr.co.dotman.dotreactadmin.products;

import java.security.Timestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import org.springframework.data.rest.core.config.Projection;

@Projection(name = "productProjection", types = { Product.class })
public interface ProductProjection {

    @JsonProperty("id")
    Long getSeq();

    // 이미지 업로드 
   // String getOriginFileName();
  //  String getFileName();
   // String getFilePath();

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    Timestamp getPublishedAt();

}