package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.business.dto.UserRegisterDto;
import com.hamitmizrak.business.services.IUserRegisterServices;
import com.hamitmizrak.data.entity.UserRegisterEntity;
import com.hamitmizrak.data.repository.UserRegisterRepository;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

//asıl iş katmanı olan yerdir
@Service
@Log4j2
public class UserRegisterServiceImpl implements IUserRegisterServices {

    @Autowired
    UserRegisterRepository repository;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    PasswordEncoder passwordEncoder;

    //ModelMapper
    @Override
    public UserRegisterDto EntityToDto(UserRegisterEntity userRegisterEntity) {
        return modelMapper.map(userRegisterEntity,UserRegisterDto.class);
    }

    @Override
    public UserRegisterEntity DtoToEntity(UserRegisterDto userRegisterDto) {
        return modelMapper.map(userRegisterDto,UserRegisterEntity.class);
    }

    //Create
    // http://localhost:8080/users/create
    @Override
    @PostMapping("users/create")
    public UserRegisterDto createUserRegister(@RequestBody UserRegisterDto userRegisterDto) {
        String encrytedMasked=passwordEncoder.encode(userRegisterDto.getUserPassword());
        userRegisterDto.setUserPassword(encrytedMasked);
        UserRegisterEntity entity=DtoToEntity(userRegisterDto);
        repository.save(entity);
        return userRegisterDto;
    }
}
