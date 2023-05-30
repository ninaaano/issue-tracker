package team05.codesquad.issuetracker.controller.milestonedto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;
import java.util.List;

@Getter
@NoArgsConstructor
public class MilestoneDto {

    private Long id;
    private String title;
    private String description;
    private LocalDate deadLine;
    private Long openedIssues;
    private Long closedIssues;
    private Boolean isOpened;
    private List<Issue> issues;

    private MilestoneDto(Milestone milestone, Long openedIssues, Long closedIssues) { // 정적 팩토리 메서드를 위한 생성자
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.description = milestone.getDescription();
        this.deadLine = milestone.getDeadLine();
        this.isOpened = true;
        this.openedIssues = openedIssues;
        this.closedIssues = closedIssues;
    }

    private MilestoneDto(Milestone milestone, List<Issue> issues) {
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.description = milestone.getDescription();
        this.deadLine = milestone.getDeadLine();
        this.isOpened = true;
        this.issues = issues;
    }

    public static MilestoneDto of(Milestone milestone, List<Issue> issues) {
        return new MilestoneDto(milestone, issues);
    }

    public static MilestoneDto of(Milestone milestone, Long openedIssues, Long closedIssues) { // 정적 팩토리 메서드
        return new MilestoneDto(milestone, openedIssues, closedIssues);
    }

}
