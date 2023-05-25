package team05.codesquad.issuetracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class MilestoneDto {

    private Long id;
    private String title;
    private String description;
    private LocalDate deadLine;
    private Long openedIssues;
    private Long closedIssues;
    private Boolean status;

    private MilestoneDto(Milestone milestone) { // 정적 팩토리 메서드를 위한 생성자
        this.id = milestone.getId();
        this.title = milestone.getTitle();
        this.description = milestone.getDescription();
        this.deadLine = milestone.getDeadLine();
        this.openedIssues = milestone.countOpenIssues();
        this.closedIssues = milestone.countCloseIssues();
        this.status = true;
    }

    public static MilestoneDto of(Milestone milestone) { // 정적 팩토리 메서드
        return new MilestoneDto(milestone);
    }

}
