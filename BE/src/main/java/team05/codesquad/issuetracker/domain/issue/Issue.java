package team05.codesquad.issuetracker.domain.issue;


import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.label.Label;


import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Table("issue")
@Setter
@Getter
@ToString
@AllArgsConstructor
public class Issue {

    @Id
    @Column("issue_id")
    private Long id;

//    @Column("writer_id")
//    private Long writerId;

    private String title;
    private String contents;

    @Column("status")
    private Boolean openStatus;

    @CreatedDate
    @Column("created_at")
    private LocalDateTime createdAt;

    @Column("milestone_id")
    private Long milestoneId;

   // private List<Comment> comments = new ArrayList<>();
    @Transient
    private List<Label> labels = new ArrayList<>();

    public Issue() {
    }

    @MappedCollection(idColumn = "issue_id", keyColumn = "id")
    @Builder.Default
    private Set<IssueRefLabel> issueLabels = new HashSet<>();

    // 이슈에 라벨 더하기
    public void addLabel(Label label){
        labels.add(label);
        // issue-label 테이블에 추가로 더하기 (동시성)
        issueLabels.add(new IssueRefLabel(label.getId(),id));
    }



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
