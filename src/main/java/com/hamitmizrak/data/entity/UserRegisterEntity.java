package com.hamitmizrak.data.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data

@Entity
@Table(name = "user_register")
public class UserRegisterEntity extends BaseEntity {

    @Column(name = "user_name")
    private String userName;

    @Column(name = "user_surname")
    private String userSurname;

    @Column(name = "user_password")
    private String userPassword;
}
