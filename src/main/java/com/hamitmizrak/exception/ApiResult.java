package com.hamitmizrak.exception;

import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

//Lombok
@Data
//Backendten FrontEnde veri göndermek için kullanacağım
public class ApiResult {
    private int status;
    private String path;
    private String message;
    private String createdDate=nowDate();
    private Map<String,String> validationData;

    //Now Date
    private String nowDate() {
        Locale locale=new Locale("tr","TR");
        SimpleDateFormat simpleDateFormat=new SimpleDateFormat("dd/MMMM/yyyy HH:mm:ss",locale);
        Date date=new Date();
        String change=simpleDateFormat.format(date);
        return change;
    }

    //parametreli constructor
    public ApiResult(int status, String path, String message) {
        this.status = status;
        this.path = path;
        this.message = message;
    }
}
