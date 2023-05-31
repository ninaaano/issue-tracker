package team05.codesquad.issuetracker.controller.commentdto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;

@Slf4j
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentCreateRequest {

    private Long writerId; // 로그인 미 구현이므로 필요
    private String name; // 로그인 미 구현이므로 필요
    private String contents;
    private LocalDate createdAt;

}
