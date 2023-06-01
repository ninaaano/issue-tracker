package team05.codesquad.issuetracker.controller.commentdto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.controller.commentdto.CommentDto;
import team05.codesquad.issuetracker.domain.comment.Comment;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class CommentDtoListResponse {

    List<CommentDto> allComments;

    private CommentDtoListResponse(List<Comment> comments) {
        allComments = new ArrayList<>();
        for (Comment comment : comments) {
            allComments.add(CommentDto.of(comment));
        }
    }

    public static CommentDtoListResponse of(List<Comment> comments) {
        return new CommentDtoListResponse(comments);
    }
}
