package com.hamitmizrak.data.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

//lombok
@Data
@NoArgsConstructor
@Builder

//entity
@Entity
@Table(name = "employees")
public class EmployeeEntity extends BaseEntity {

    @Column(name="employee_name")
    public String employeeName;

    @Column(name="employee_email")
    public String employeeEmail;

    //parametreli constructor
    public EmployeeEntity(String employeeName, String employeeEmail) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
    }
}
