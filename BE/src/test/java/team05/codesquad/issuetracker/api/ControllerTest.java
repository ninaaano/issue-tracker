package team05.codesquad.issuetracker.api;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import team05.codesquad.issuetracker.controller.FooController;
import team05.codesquad.issuetracker.service.MemberService;

@AutoConfigureRestDocs
@WebMvcTest(FooController.class)
public class ControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean // Controller의 의존하는 빈을 모킹
    private MemberService memberService;

    @DisplayName("멤버를 가져온다")
    @Test
    void findById() throws Exception {
        // given
        // when
        // then
    }


}
