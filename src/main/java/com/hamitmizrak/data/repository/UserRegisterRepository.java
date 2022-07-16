package com.hamitmizrak.data.repository;

import com.hamitmizrak.data.entity.UserRegisterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity,Long> {
}
