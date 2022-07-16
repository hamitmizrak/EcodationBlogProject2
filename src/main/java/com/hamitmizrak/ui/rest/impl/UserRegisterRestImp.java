package com.hamitmizrak.ui.rest.impl;

import com.hamitmizrak.business.dto.UserRegisterDto;
import com.hamitmizrak.business.services.IUserRegisterServices;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
@Log4j2
//dış dünyaya açılan kapı
public class UserRegisterRestImp {

    @Autowired
    IUserRegisterServices services;

    //http://localhost:8080/api/v1/users
    @PostMapping("users")
    public void createUser(@RequestBody UserRegisterDto userRegisterDto){
        log.info(userRegisterDto);
        services.createUserRegister(userRegisterDto);

    }
}
