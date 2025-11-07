package com.example.contactservice;

import com.example.model.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {


    @Autowired
    private JavaMailSender mailSender;

    public void sendContactMail(ContactForm contact) {

        SimpleMailMessage messageToOwner = new SimpleMailMessage();
        messageToOwner.setFrom("Vaidehi Tour & Travel <vaidehitourandtravels77@gmail.com>");
        messageToOwner.setTo("dkumarsh6@gmail.com");   // ✅ your inbox
        messageToOwner.setSubject("New Contact from " + contact.getName() + ": " + contact.getSubject());
        messageToOwner.setText(
                "You received a new message from your website vaidehi tour and travels form:\n\n" +
                        "Name: " + contact.getName() + "\n" +
                        "Email: " + contact.getEmail() + "\n\n" +
                        "Message:\n" + contact.getMessage()
        );
        messageToOwner.setReplyTo(contact.getEmail()); // ✅ lets you reply directly to the user
        mailSender.send(messageToOwner);

    }
}

