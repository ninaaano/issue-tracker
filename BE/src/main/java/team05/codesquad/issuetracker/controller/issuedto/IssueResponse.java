package team05.codesquad.issuetracker.controller.issuedto;

import lombok.*;
import team05.codesquad.issuetracker.controller.labeldto.LabelResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.domain.member.Member;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class IssueResponse {
    private Long id;
    private String title;
    private LocalDateTime createAt;
    //private Member author;
    //private List<Member> assignees;
    private List<Label> labels;
    private Long milestoneId;
    private boolean isOpened;

    public static IssueResponse from(Issue issue) {
        return new IssueResponse(issue.getId(), issue.getTitle(),issue.getCreatedAt(), issue.getLabels(),issue.getMilestoneId().getId(),issue.getIsOpened());
    }

}
