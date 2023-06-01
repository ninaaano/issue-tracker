package team05.codesquad.issuetracker.controller.commentdto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;
import team05.codesquad.issuetracker.domain.comment.Comment;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class CommentDto {

    private Long commentId;
    private String content;
    private LocalDate createdAt;
    private MemberResponse commentUser;

    private CommentDto(Comment comment) {
        this.commentId = comment.getId();
        this.commentUser = MemberResponse.builder().userId(comment.getWriterId()).userName(comment.getWriterName()).build();
        this.content = comment.getContents();
        this.createdAt = comment.getCreatedAt();
    }

    public static CommentDto of(Comment comment) {
        return new CommentDto(comment);
    }
}
