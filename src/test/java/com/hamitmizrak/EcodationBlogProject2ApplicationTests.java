package com.hamitmizrak;


import com.hamitmizrak.data.entity.EmployeeEntity;
import com.hamitmizrak.data.repository.EmployeeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class EcodationBlogProject2ApplicationTests implements ITestData {

    @Autowired
    EmployeeRepository repository;

    @Override
    @Test
    public void testCreate() {
        EmployeeEntity employeeEntity=EmployeeEntity.builder().employeeName("Hamit").employeeEmail("hamitmizrak@gmail.com").build();
        repository.save(employeeEntity);

        //database eklenecek ilk data 1 datadır
        assertNotNull(repository.findById(1L).get());
    }

    @Override
    @Test
    public void testFind() {
        EmployeeEntity employeeEntity=repository.findById(1L).get();
        assertEquals("Hamit",employeeEntity.getEmployeeName());
    }

    @Override
    @Test
    public void testList() {
        List<EmployeeEntity> entityList=repository.findAll();
        assertThat(entityList).size().isGreaterThan(0);

    }

    @Override
    @Test
    public void testUpdate() {
        EmployeeEntity employeeEntity=repository.findById(1L).get();
        employeeEntity.setEmployeeName("Hamit44");
        repository.save(employeeEntity);
        assertNotEquals("Hamit",repository.findById(1L).get().getEmployeeName());
    }

    @Override
    @Test
    public void testDelete() {
        repository.deleteById(1L);
        assertThat(repository.existsById(1L)).isFalse();

    }
}
