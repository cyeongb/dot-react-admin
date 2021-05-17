package kr.co.dotman.dotreactadmin.posts;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.multipart.MultipartRequest;

import javax.persistence.*;


import java.sql.Timestamp;

@Entity
@Table(name = "post")
@NoArgsConstructor 
@AllArgsConstructor
@Data
public class Post {
    @Id
    @Column(name = "seq")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long seq;  //id

    @Column(name = "title")
    private String title;  //제목

    @Column(name = "body")
    private String body;  //내용

    @Column(name = "name")
    private String name;  //작성자 이름

    @Column(name = "password")
    private String password;  //작성 글 비밀번호

    @Column(name = "x")  //x, y 좌표값은 테스트용입니다
    private Long x;

    @Column(name = "y")  //x, y 좌표값은 테스트용입니다
    private Long y;

    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    private Timestamp publishedAt;


  // String originFileName; 
 //  String fileName; 
  // String filePath;
       
  //   }
}