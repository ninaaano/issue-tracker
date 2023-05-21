package team05.codesquad.issuetracker.domain.milestone;

import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.Issue;

import java.time.LocalDate;
import java.util.List;

@Table("milestone")
@Getter
public class Milestone {
거
    @Id
    @Column("milestone_id")
    private Long id;

    @Column("title")
    private String title;

    @Column("description")
    private String description;

    @Column("deadline")
    private LocalDate deadLine;

    @Column("")
    private boolean status;

    @MappedCollection
    private List<Issue> issues;

    public long countOpenIssues(){
        return issues.stream()
                .filter(Issue::isStatus)
                .count();
    }

    public long countCloseIssues(){
        return issues.stream()
                .filter(issue -> !issue.isStatus()) // Issue 객체의 status 필드가 false인 경우 필터링
                .count();
    }

}
