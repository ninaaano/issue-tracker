package team05.codesquad.issuetracker.domain.milestone;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.time.LocalDate;
import java.util.List;

@Table("milestone")
@Data
public class Milestone {
    @Id
    @Column("milestone_id")
    private Long id;
    private String title;
    private String description;
    private LocalDate deadLine;
    private boolean status;
    @MappedCollection
    private List<Issue> issues;

    public long countOpenIssues(){
        return issues.stream()
                .filter(Issue::getOpenStatus)
                .count();
    }

    public long countCloseIssues(){
        return issues.stream()
                .filter(issue -> !issue.getOpenStatus()) // Issue 객체의 status 필드가 false인 경우 필터링
                .count();
    }

}
