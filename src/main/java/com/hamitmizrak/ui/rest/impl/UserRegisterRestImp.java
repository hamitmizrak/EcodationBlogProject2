package com.hamitmizrak.ui.rest.impl;

import com.hamitmizrak.business.dto.UserRegisterDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
@Log4j2
public class UserRegisterRestImp {

    //http://localhost:8080/api/v1/users
    @PostMapping("users")
    public void createUser(@RequestBody UserRegisterDto userRegisterDto){
        log.info(userRegisterDto);
    }
}
