package team05.codesquad.issuetracker.controller.commentdto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.domain.comment.Comment;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class CommentDto {

    private Long commentId;
    private Long writerId;
    private String contents;
    private LocalDate createdAt;

    private CommentDto(Comment comment) {
        this.commentId = comment.getId();
        this.writerId = comment.getWriterId();
        this.contents = comment.getContents();
        this.createdAt = comment.getCreatedAt();
    }

    public static CommentDto of(Comment comment) {
        return new CommentDto(comment);
    }
}
