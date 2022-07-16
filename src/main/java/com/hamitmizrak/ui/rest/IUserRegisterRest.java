package com.hamitmizrak.ui.rest;


import com.hamitmizrak.business.dto.UserRegisterDto;

public interface IUserRegisterRest {

    //save
    UserRegisterDto createUserRegister(UserRegisterDto userRegisterDto);
}
