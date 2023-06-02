package team05.codesquad.issuetracker.controller.commentdto.response;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Getter
public class CommentCreateResponse {

    private final Long commentId;

    public CommentCreateResponse(Long commentId) {
        this.commentId = commentId;
    }

}
