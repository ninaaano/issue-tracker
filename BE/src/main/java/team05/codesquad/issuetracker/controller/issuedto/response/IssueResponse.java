package team05.codesquad.issuetracker.controller.issuedto.response;

import lombok.*;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelResponse;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class IssueResponse {
    private Long issueId;
    private String issueTitle;
    private LocalDateTime createdAt;
    //private Member author;
    private List<LabelResponse> label;
    private List<MemberResponse> assignee;
    private Long milestoneId;
    private boolean isopened;

    public static IssueResponse from(Issue issue) {
        Long milestoneId = null;
        if (issue.getMilestone() != null) {
            milestoneId = issue.getMilestone().getId();
        }
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getCreatedAt(), LabelResponse.from(issue.getLabels()), MemberResponse.from(issue.getAssignees()), milestoneId, issue.getIsOpened());
    }

}
