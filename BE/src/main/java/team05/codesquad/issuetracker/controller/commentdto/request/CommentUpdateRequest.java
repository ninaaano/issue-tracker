package team05.codesquad.issuetracker.controller.commentdto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@NoArgsConstructor
public class CommentUpdateRequest {

    private String content;

}
