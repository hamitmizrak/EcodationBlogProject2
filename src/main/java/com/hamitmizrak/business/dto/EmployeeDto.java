package com.hamitmizrak.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//lombok
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data

public class EmployeeDto {
   // public Long employeeId;
    private Long employeeId;
    private String employeeName;
    private String employeeEmail;
}
