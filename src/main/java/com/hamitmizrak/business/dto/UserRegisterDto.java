package com.hamitmizrak.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

//lombok
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserRegisterDto {
    private Long userId;

    @NotNull(message = "kullanıcı adı boş geçilemez.")
    @Size(min=3,max = 250,message = "kullanıcı adı min:3 max:250 olabilir")
    private String userName;

    @NotNull(message = "kullanıcı soyadı boş geçilemez.")
    private String userSurname;

    //Hm51524
    @NotNull(message = "kullanıcı şifresi boş geçilemez.")
    @Size(min=7,max = 200,message = "kullanıcı şifresi min:3 max:250 olabilir")
    @Pattern(regexp = "^[a-zA-Z0-9]{7}")
    private String userPassword;
}
