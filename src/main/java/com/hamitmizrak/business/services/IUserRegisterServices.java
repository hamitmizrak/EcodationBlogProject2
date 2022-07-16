package com.hamitmizrak.business.services;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.dto.UserRegisterDto;
import com.hamitmizrak.data.entity.EmployeeEntity;
import com.hamitmizrak.data.entity.UserRegisterEntity;

public interface IUserRegisterServices {
    //model
    public UserRegisterDto EntityToDto(UserRegisterEntity userRegisterEntity);
    public UserRegisterEntity DtoToEntity(UserRegisterDto userRegisterDto);

    //Save
    public UserRegisterDto createUserRegister(UserRegisterDto userRegisterDto);
}
