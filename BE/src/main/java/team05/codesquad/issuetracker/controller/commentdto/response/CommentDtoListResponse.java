package team05.codesquad.issuetracker.controller.commentdto.response;

import team05.codesquad.issuetracker.controller.commentdto.CommentDto;
import team05.codesquad.issuetracker.domain.comment.Comment;

import java.util.ArrayList;
import java.util.List;

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
