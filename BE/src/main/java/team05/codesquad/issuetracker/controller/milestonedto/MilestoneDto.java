package team05.codesquad.issuetracker.controller.milestonedto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;

@Getter
@NoArgsConstructor
public class MilestoneDto {

    private Long milestoneId;
    private String milestoneName;
    private String content;
    private LocalDate deadline;
    private Boolean isOpened;
    private IssuesResponse issuesResponse;

    private MilestoneDto(Milestone milestone, IssuesResponse issuesResponse) {
        this.milestoneId = milestone.getId();
        this.milestoneName = milestone.getTitle();
        this.content = milestone.getDescription();
        this.deadline = milestone.getDeadLine();
        this.isOpened = true;
        this.issuesResponse = issuesResponse;
    }

    public static MilestoneDto of(Milestone milestone, IssuesResponse issuesResponse) {
        return new MilestoneDto(milestone, issuesResponse);
    }

}
