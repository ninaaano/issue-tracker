package team05.codesquad.issuetracker.controller.commentdto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
@Builder
public class CommentUpdateResponse {

    private String contents;

}
