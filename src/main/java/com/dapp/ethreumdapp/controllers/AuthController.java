package com.dapp.ethreumdapp.controllers;

import com.dapp.ethreumdapp.dao.UserRepository;
import com.dapp.ethreumdapp.models.FormData;
import com.dapp.ethreumdapp.models.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class AuthController {
    private Logger logger = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    // @GetMapping(value = "/login")
    // public String Login() {
    //     return null;
    // }

    @PostMapping(value  = "/registration")
    public String register(@ModelAttribute FormData formData, RedirectAttributes redirectAttributes) {
        User existingUser = this.userRepository.getUserByEmail(formData.getEmail());
        User existingUserByUserId = this.userRepository.getUserByUserId(formData.getUserId());

        if (existingUser != null || existingUserByUserId != null) {
            this.logger.info("User is already exist by this cred please change the user id or email to register");
            redirectAttributes.addFlashAttribute("message","User is already exist by this cred please change the user id or email to register");

            return "redirect:/signup";
        } else {
            User newUser = new User();
            newUser.setName(formData.getName());
            newUser.setUserId(formData.getUserId());
            newUser.setEmail(formData.getEmail());
            newUser.setPassword(passwordEncoder.encode(formData.getPassword()));

            this.userRepository.save(newUser);
        }

        return "redirect:/login";
    }

    @GetMapping(value = "/forgetpassword")
    public String forgetPassword() {
        return null;
    }
}
