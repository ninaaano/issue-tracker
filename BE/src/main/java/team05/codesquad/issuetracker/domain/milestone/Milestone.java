package team05.codesquad.issuetracker.domain.milestone;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Table("milestone")
@Setter
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
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

    public Map<String, Long> countIssues() {
        long openIssueCount = Issue.countOpenIssues(issues);
        long closedIssueCount = Issue.countClosedIssues(issues);

        Map<String, Long> issueCounts = new HashMap<>();
        issueCounts.put("open", openIssueCount);
        issueCounts.put("closed", closedIssueCount);
        return issueCounts;
    }

}
