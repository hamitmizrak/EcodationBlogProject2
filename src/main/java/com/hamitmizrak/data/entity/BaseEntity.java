package com.hamitmizrak.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

//lombok
@Data
@NoArgsConstructor

//super
@MappedSuperclass

//audit
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {""}, allowGetters = true)
abstract public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    //kim ekledi
    @Column(name = "created_by")
    @CreatedBy
    private String createdBy;

    //kim ne zaman ekledi
    @Column(name = "created_date")
    @CreatedDate
    private Date createdDate;

    //kim güncelledi
    @Column(name = "update_by")
    @LastModifiedBy
    private String updateBy;

    //kim ne zaman gucelledi
    @Column(name = "update_date")
    @LastModifiedDate
    private Date updateDate;

}
