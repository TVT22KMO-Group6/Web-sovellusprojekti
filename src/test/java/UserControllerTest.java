import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest(classes = com.group6.sovellusprojekti.SovellusprojektiApplication.class)
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // Testit tulevat tähän

    @Test
    @Transactional
    public void createUserTest() throws Exception {
        String userJson = "{\"username\":\"testuser1\",\"password\":\"testpassword1\"}";


        mockMvc.perform(post("/api/user/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
                .andExpect(status().isCreated());
    }
}