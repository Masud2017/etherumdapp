package com.dapp.ethreumdapp.controllers;

import com.dapp.ethreumdapp.dao.UserRepository;
import com.dapp.ethreumdapp.models.FormData;
import com.dapp.ethreumdapp.models.LoginForm;
import com.dapp.ethreumdapp.models.User;
import com.dapp.ethreumdapp.utils.Util;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;

@Controller
public class AuthController {
    private Logger logger = LoggerFactory.getLogger(AuthController.class);
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;


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

    @PostMapping(value = "/authenticate")
    public String authenticate(@ModelAttribute LoginForm loginForm, HttpServletRequest request,RedirectAttributes redirectAttributes) {
        User existingUser = null;
        if (Util.isEmail(loginForm.getId())) {
            existingUser = this.userRepository.getUserByEmail(loginForm.getId());
        } else {
            existingUser = this.userRepository.getUserByUserId(loginForm.getId());
        }

        this.logger.info("Doing something !!!");

        if (existingUser != null) {
            if (this.passwordEncoder.matches(loginForm.getPassword(),existingUser.getPassword())) {
                try {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(loginForm.getId(),loginForm.getPassword());
//                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetails(request));

                    Authentication authentication = this.authenticationManager.authenticate(usernamePasswordAuthenticationToken);
                    SecurityContext securityContext = SecurityContextHolder.getContext();
                    securityContext.setAuthentication(authentication);

                    HttpSession session = request.getSession(true);
                    session.setAttribute("SPRING_SECURITY_CONTEXT", securityContext);
                } catch (Exception e) {
                    SecurityContextHolder.getContext().setAuthentication(null);
                    this.logger.error("Something went wrong !!");

                    e.printStackTrace();
                }

                this.logger.info("login complete");

                return "redirect:/";
            }
        }

        redirectAttributes.addFlashAttribute("message","Your provided credential is not correct please enter a valid credential !");

        return "redirect:/login";
    }

    @GetMapping(value = "/forgetpassword")
    public String forgetPassword() {
        return "Hell world";
    }
}
