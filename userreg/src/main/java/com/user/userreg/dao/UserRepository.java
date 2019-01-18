package com.user.userreg.dao;

import org.springframework.data.jpa.repository.JpaRepository;


import com.user.userreg.models.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
