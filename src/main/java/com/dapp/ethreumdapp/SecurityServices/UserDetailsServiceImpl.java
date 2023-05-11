package com.dapp.ethreumdapp.SecurityServices;

import com.dapp.ethreumdapp.dao.UserRepository;
import com.dapp.ethreumdapp.models.User;
import com.dapp.ethreumdapp.utils.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = null;
        if (Util.isEmail(username)) {
            user = this.userRepository.getUserByEmail(username);
            if (user != null) {
                return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),new ArrayList<>());
            }
        }
        user = this.userRepository.getUserByUserId(username);
        if (user != null) {
            return new org.springframework.security.core.userdetails.User(user.getUserId(),user.getPassword(),new ArrayList<>());
        }
        return null;
    }
}
