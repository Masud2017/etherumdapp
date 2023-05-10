package com.dapp.ethreumdapp.dao;

import com.dapp.ethreumdapp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User getUserByEmail(String email);
    User getUserByUserId(String userId);
}
