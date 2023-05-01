import com.group6.sovellusprojekti.controller.JwtAuthenticationController;
import com.group6.sovellusprojekti.model.auth.JwtRequest;
import com.group6.sovellusprojekti.service.JwtUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest(classes = com.group6.sovellusprojekti.SovellusprojektiApplication.class)
@AutoConfigureMockMvc
public class JwtAuthenticationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private JwtUserDetailsService userDetailsService;

    @InjectMocks
    private JwtAuthenticationController jwtAuthenticationController;

    @Test
    public void testSuccessfulLogin() throws Exception {
        JwtRequest jwtRequest = new JwtRequest();
        jwtRequest.setUsername("asd");
        jwtRequest.setPassword("asd");
        UserDetails userDetails = new org.springframework.security.core.userdetails.User(jwtRequest.getUsername(), jwtRequest.getPassword(), new ArrayList<>());
        String jwtToken;
    
        when(userDetailsService.loadUserByUsername(jwtRequest.getUsername())).thenReturn(userDetails);
        
        // Generate JWT token
        String tokenResponse = mockMvc.perform(post("/api/user/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jwtRequest)))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        
        // Extract JWT token from response
        jwtToken = objectMapper.readTree(tokenResponse).get("jwt").asText();
        
        mockMvc.perform(post("/api/user/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jwtRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.jwt").value(jwtToken));
    }

    @Test
    public void testFailedLogin() throws Exception {
        JwtRequest jwtRequest = new JwtRequest();
        jwtRequest.setUsername("testuser");
        jwtRequest.setPassword("wrongpassword");

        when(userDetailsService.loadUserByUsername(jwtRequest.getUsername())).thenThrow(new UsernameNotFoundException("User not found with username: " + jwtRequest.getUsername()));

        mockMvc.perform(post("/api/user/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jwtRequest)))
                .andExpect(status().isUnauthorized());
    }
}