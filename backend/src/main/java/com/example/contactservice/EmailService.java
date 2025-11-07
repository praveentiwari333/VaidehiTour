package com.example.contactservice;

import com.example.model.ContactForm;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class EmailService {

    private static final String BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
    private static final String BREVO_API_KEY = System.getenv("BREVO_API_KEY"); // <- add this in Render env vars

    public void sendContactMail(ContactForm contact) {

        try {
            RestTemplate restTemplate = new RestTemplate();

            // Email payload
            Map<String, Object> payload = new HashMap<>();
            payload.put("sender", Map.of(
                    "email", "vaidehitourandtravels77@gmail.com",
                    "name", "Vaidehi Tour & Travel"
            ));
            payload.put("to", new Object[]{
                    Map.of("email", "dkumarsh6@gmail.com", "name", "Admin")
            });
            payload.put("subject", "New Contact from " + contact.getName() + ": " + contact.getSubject());
            payload.put("htmlContent",
                    "<h2>New Contact Request - Vaidehi Tour & Travel</h2>"
                    + "<p><b>Name:</b> " + contact.getName() + "</p>"
                    + "<p><b>Email:</b> " + contact.getEmail() + "</p>"
                    + "<p><b>Message:</b><br>" + contact.getMessage() + "</p>"
            );

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("api-key", BREVO_API_KEY);

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(payload, headers);

            ResponseEntity<String> response = restTemplate.exchange(
                    BREVO_API_URL,
                    HttpMethod.POST,
                    entity,
                    String.class
            );

            System.out.println("✅ Email sent via Brevo! Response: " + response.getBody());

        } catch (Exception e) {
            System.err.println("❌ Failed to send email via Brevo API: " + e.getMessage());
            throw new RuntimeException("Email sending failed", e);
        }
    }
}


