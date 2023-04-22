import com.group6.sovellusprojekti.service.EncoderService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(classes = com.group6.sovellusprojekti.SovellusprojektiApplication.class)
public class EncoderServiceTest {

    @Autowired
    private EncoderService encoderService;

    @Test
    public void testEncode() {
        String password = "testpassword";
        String encodedPassword = encoderService.encode(password);

        assertThat(encodedPassword).isNotEqualTo(password);
        assertThat(encoderService.matches(password, encodedPassword)).isTrue();
    }
}