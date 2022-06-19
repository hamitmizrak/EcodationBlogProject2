package com.hamitmizrak.ui.rest;

import com.hamitmizrak.business.dto.EmployeeDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IEmployeeRest {

    //save
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    //list
    List<EmployeeDto> getAllEmployees();

    //find
    ResponseEntity<EmployeeDto> getEmployeeById(Long id);

    //update
    ResponseEntity<EmployeeDto> updateEmployee(Long id,EmployeeDto employeeDto);

    //delete
    ResponseEntity<Map<String,Boolean>> deleteEmployee(Long id);

}
