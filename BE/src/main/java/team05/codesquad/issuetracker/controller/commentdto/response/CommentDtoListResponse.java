package team05.codesquad.issuetracker.controller.commentdto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import team05.codesquad.issuetracker.controller.commentdto.CommentDto;
import team05.codesquad.issuetracker.domain.comment.Comment;

import java.util.ArrayList;
import java.util.List;

@Getter
@Slf4j
@NoArgsConstructor
public class CommentDtoListResponse {

    List<CommentDto> allComments;

    private CommentDtoListResponse(List<Comment> comments) {
        allComments = new ArrayList<>();
        for (Comment comment : comments) {
            log.info(">>>> commentUser 객체 제대로 들어오는지 확인: {}", CommentDto.of(comment).getCommentUser());
            allComments.add(CommentDto.of(comment));
        }
    }

    public static CommentDtoListResponse of(List<Comment> comments) {
        return new CommentDtoListResponse(comments);
    }
}
