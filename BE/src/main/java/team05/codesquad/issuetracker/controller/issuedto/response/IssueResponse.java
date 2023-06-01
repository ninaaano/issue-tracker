package team05.codesquad.issuetracker.controller.issuedto.response;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import team05.codesquad.issuetracker.controller.commentdto.response.CommentDtoListResponse;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelResponse;
import team05.codesquad.issuetracker.domain.comment.Comment;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
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
    private CommentDtoListResponse commentDtoListResponse;
    private Long milestoneId;
    private boolean isopened;

    public IssueResponse(Long issueId, String issueTitle, LocalDateTime createdAt, List<LabelResponse> label, List<MemberResponse> assignee, Long milestoneId, Boolean isOpened) {
        this.issueId = issueId;
        this.issueTitle = issueTitle;
        this.createdAt = createdAt;
        this.label = label;
        this.assignee = assignee;
        this.milestoneId = milestoneId;
        this.isopened = isOpened;
    }

    public static IssueResponse from(Issue issue) {
        Long milestoneId = null;
        if (issue.getMilestone() != null) {
            milestoneId = issue.getMilestone().getId();
        }
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getCreatedAt(), LabelResponse.from(issue.getLabels()), MemberResponse.from(issue.getAssignees()), milestoneId, issue.getIsOpened());
    }

    public static IssueResponse from(Issue issue, List<Comment> commentList) {
        if (commentList == null) {
            log.info(">>>>>>>>>> commentList가 null일때");
            return from(issue);
        }
        Long milestoneId = null;
        if (issue.getMilestone() != null) {
            milestoneId = issue.getMilestone().getId();
        }
        return new IssueResponse(issue.getId(), issue.getTitle(), issue.getCreatedAt(), LabelResponse.from(issue.getLabels()), MemberResponse.from(issue.getAssignees()), CommentDtoListResponse.of(commentList), milestoneId, issue.getIsOpened());
    }

}
