package com.example.controller;

import com.example.contactservice.EmailService;
import com.example.model.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*") // Allow frontend requests
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public String sendMessage(@RequestBody ContactForm contact) {
        emailService.sendContactMail(contact);
        return "Message sent successfully!";
    }
}

