package com.hamitmizrak.ui.rest.impl;

import com.hamitmizrak.business.dto.UserRegisterDto;
import com.hamitmizrak.business.services.IUserRegisterServices;
import com.hamitmizrak.exception.ApiResult;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

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
    public ResponseEntity<?> createUser(@Valid @RequestBody UserRegisterDto userRegisterDto) {
        log.info(userRegisterDto);
        services.createUserRegister(userRegisterDto);
        return ResponseEntity.ok("User Eklendi" + userRegisterDto);
    }

    //Exception handling
    //Eğer MethodArgumentNotValidException istisna meydana gelirse bu istisnayı yakalasın
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST) //400 göndersin
    public ApiResult apiResult(MethodArgumentNotValidException exception) {
        ApiResult apiResult = new ApiResult(400, "/api/v1/users", "null variable ecodation");
        Map<String, String> validationData = new HashMap<>();
        for (FieldError error : exception.getBindingResult().getFieldErrors()) {
            validationData.put(error.getField(), error.getDefaultMessage());
        }
        apiResult.setValidationData(validationData);
        return apiResult;
    }
}
