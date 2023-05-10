package com.dapp.ethreumdapp.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dapp.ethreumdapp.services.NewsLetterService;

@Controller
public class EmailNewsSubscriptionController {
    @Autowired
    private NewsLetterService newsLetterService;
    private Logger logger = LoggerFactory.getLogger(EmailNewsSubscriptionController.class);

    @GetMapping(value = "/subscribenews")
    public String subscribeNews (@RequestParam String username) {
        this.logger.info("Email subscription request recieved !!");
        return "redirect:/";
    }
    
}
