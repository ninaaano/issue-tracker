package team05.codesquad.issuetracker.domain.comment;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.controller.commentdto.request.CommentCreateRequest;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;

import java.time.LocalDate;

@Slf4j
@Table("comment")
@Getter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class Comment {

    @Id
    @Column("comment_id")
    private Long id;

    @Column("writer_id")
    private Long writerId;

    @Column("writer_name")
    private String writerName;

    @Column("issue_id")
    private Long issueId;

    private String contents;

    @CreatedDate
    @Column("created_at")
    private LocalDate createdAt;

    @Transient
    private MemberResponse commentUser;

    @Builder
    public Comment(Long issueId, String contents, LocalDate createdAt, MemberResponse commentUser) {
        this.issueId = issueId;
        this.contents = contents;
        this.createdAt = createdAt;
        this.commentUser = commentUser;
        this.writerId = commentUser.getUserId();
        this.writerName = commentUser.getName();
    }

    public static Comment toEntity(Long issueId, CommentCreateRequest request) {
        return Comment.builder()
                .issueId(issueId)
                .contents(request.getContents())
                .createdAt(request.getCreatedAt())
                .commentUser(MemberResponse.builder().userId(request.getWriterId()).name(request.getName()).url(request.getUrl()).build())
                .build();
    }

    public void updateProperties(String contents) {
        this.contents = contents;
    }
}
