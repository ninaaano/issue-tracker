package team05.codesquad.issuetracker.domain.issue;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import team05.codesquad.issuetracker.domain.comment.Comment;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.domain.member.Member;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class Issue {

    @Id
    @Column("issue_id")
    private Long id;
    private Member issueWriter;
    private String title;
    private String content;
    private boolean status;
    @CreatedDate
    private LocalDate createAt;
    private Milestone milestone;
    @MappedCollection
    private List<Comment> comments;
    @MappedCollection
    private List<Label> labels;

}
