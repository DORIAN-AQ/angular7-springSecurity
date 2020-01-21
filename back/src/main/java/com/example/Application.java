// package com.example;

// import java.util.HashMap;
// import java.util.Map;
// import java.util.UUID;

// import org.springframework.boot.SpringApplication;
// import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// @SpringBootApplication
// @RestController
// public class Application {

// 	  @RequestMapping("/resource")
// 	  public Map<String,Object> home() {
// 	    Map<String,Object> model = new HashMap<String,Object>();
// 	    model.put("id", UUID.randomUUID().toString());
// 	    model.put("content", "Hello World");
// 	    return model;
// 	  }

// 	public static void main(String[] args) {
// 		SpringApplication.run(DemoApplication.class, args);
// 	}

// }


package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}