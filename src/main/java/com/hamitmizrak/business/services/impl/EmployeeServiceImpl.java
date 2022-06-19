package com.hamitmizrak.business.services.impl;

import com.hamitmizrak.business.dto.EmployeeDto;
import com.hamitmizrak.business.services.IEmployeeServices;
import com.hamitmizrak.data.entity.EmployeeEntity;
import com.hamitmizrak.data.repository.EmployeeRepository;
import com.hamitmizrak.exception.ResourceNotFoundException;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Log4j2
public class EmployeeServiceImpl implements IEmployeeServices {

    @Autowired
    EmployeeRepository repository;

    @Autowired
    ModelMapper modelMapper;

    //modelMapper
    @Override
    public EmployeeDto EntityToDto(EmployeeEntity employeeEntity) {
        EmployeeDto employeeDto = modelMapper.map(employeeEntity, EmployeeDto.class);
        return employeeDto;
    }

    @Override
    public EmployeeEntity DtoToEntity(EmployeeDto employeeDto) {
        EmployeeEntity entity = modelMapper.map(employeeDto, EmployeeEntity.class);
        return entity;
    }

    //save
    //http://localhost:8080/save/employees
    @Override
    @PostMapping("/save/employees")
    public EmployeeDto createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeEntity entity = DtoToEntity(employeeDto);
        repository.save(entity);
        log.info("Ekleme Başarılı");
        return employeeDto;
    }

    //list
    //http://localhost:8080/list/employees
    @Override
    @GetMapping("/list/employees")
    public List<EmployeeDto> getAllEmployee() {
        List<EmployeeDto> list = new ArrayList<>();
        Iterable<EmployeeEntity> listem = repository.findAll();
        for (EmployeeEntity entity : listem) {
            EmployeeDto employeeDto = EntityToDto(entity);
            list.add(employeeDto);
        }
        return list;
    }

    //find
    //http://localhost:8080/find/employees/1
    @Override
    @GetMapping("/find/employees/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable(name="id") Long id) {
        EmployeeEntity employeeEntity=repository.findById(id)
                .orElseThrow( ()->new ResourceNotFoundException("Employee "+id+ "id bulunmadııı"));
        EmployeeDto employeeDto=EntityToDto(employeeEntity);
        return ResponseEntity.ok(employeeDto);
    }


    //update
    @Override
    @PutMapping("/update/employees/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable(name="id") Long id,@RequestBody EmployeeDto employeeDto) {
        //DtoToEntity
        EmployeeEntity employeeEntity=DtoToEntity(employeeDto);
        EmployeeEntity employeeFind=repository.findById(id)
                .orElseThrow( ()->new ResourceNotFoundException("Employee "+id+ "id bulunmadııı"));

        //setEntity
        employeeFind.setEmployeeName(employeeEntity.getEmployeeName());
        employeeFind.setEmployeeEmail(employeeEntity.getEmployeeEmail());
        EmployeeEntity employeeEntity2=  repository.save(employeeFind);

        //EntityToDto
        EmployeeDto employeeDto2=  EntityToDto(employeeEntity2);
        return ResponseEntity.ok(employeeDto2);
    }


    //delete
    //http://localhost:8080/delete/employees/1
    @Override
    @DeleteMapping("/delete/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable(name="id") Long id) {
        EmployeeEntity employeeEntity=repository.findById(id)
                .orElseThrow( ()->new ResourceNotFoundException("Employee "+id+ "id bulunmadııı"));

        repository.delete(employeeEntity);
        Map<String,Boolean> response=new HashMap<>();
        response.put("silindi",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
