package team05.codesquad.issuetracker.domain.issue;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.comment.Comment;
import team05.codesquad.issuetracker.domain.member.Member;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import javax.annotation.Generated;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Table("issue")
@Setter
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class Issue {

    @Id
    @Column("issue_id")
    private Long id;

    @Column("writer_id")
    private int writerId;
    // TODO : 담당자, 라벨 변수 어떻게 추가할 것인가?

    @Column("title")
    private String title;

    @Column("contents")
    private String contents;

    @Column("status")
    private Boolean openStatus;

    @CreatedDate
    @Column("created_at")
    private LocalDate createdAt;

    @Column("milestone_id")
    private Integer milestoneId;

    private List<Comment> comments = new ArrayList<>();

    public static long countOpenIssues(List<Issue> issues) {
        return issues.stream()
                .filter(Issue::getOpenStatus)
                .count();
    }

    public static long countClosedIssues(List<Issue> issues) {
        return issues.stream()
                .filter(issue -> !issue.getOpenStatus())
                .count();
    }
}
