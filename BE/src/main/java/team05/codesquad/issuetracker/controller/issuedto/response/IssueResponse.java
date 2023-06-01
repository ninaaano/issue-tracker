package team05.codesquad.issuetracker.controller.issuedto.response;

import lombok.*;
import team05.codesquad.issuetracker.controller.commentdto.response.CommentDtoListResponse;
import team05.codesquad.issuetracker.controller.labeldto.response.LabelResponse;
import team05.codesquad.issuetracker.domain.comment.Comment;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.member.Member;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Builder
@ToString
public class IssueResponse {
    private Long issueId;
    private String issueTitle;
    private LocalDateTime createdAt;
    private List<LabelResponse> label;
    private List<MemberResponse> assignee;
    private CommentDtoListResponse commentDtoListResponse;
    private Long milestoneId;
    private boolean isOpened;
    private MemberResponse writer;

    public static IssueResponse from(Issue issue) {
        Long milestoneId = null;
        if (issue.getMilestone() != null) {
            milestoneId = issue.getMilestone().getId();
        }
        return IssueResponse.builder()
                .issueId(issue.getId())
                .issueTitle(issue.getTitle())
                .createdAt(issue.getCreatedAt())
                .label(LabelResponse.from(issue.getLabels()))
                .assignee(MemberResponse.from(issue.getAssignees()))
                .milestoneId(milestoneId)
                .isOpened(issue.getIsOpened())
                .build();
    }

    public static IssueResponse from(Issue issue, List<Comment> commentList, Member member) {
        if (commentList == null) {
            return from(issue);
        }
        Long milestoneId = null;
        if (issue.getMilestone() != null) {
            milestoneId = issue.getMilestone().getId();
        }
        return IssueResponse.builder()
                .issueId(issue.getId())
                .issueTitle(issue.getTitle())
                .writer(MemberResponse.from(member))
                .createdAt(issue.getCreatedAt())
                .label(LabelResponse.from(issue.getLabels()))
                .assignee(MemberResponse.from(issue.getAssignees()))
                .commentDtoListResponse(CommentDtoListResponse.of(commentList))
                .milestoneId(milestoneId)
                .isOpened(issue.getIsOpened())
                .build();
    }
}
