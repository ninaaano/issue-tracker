package team05.codesquad.issuetracker.controller.issuedto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class IssueRequest {
    private String title;
    private String contents;
    private Long milestoneId;
    private List<Long> assingeeIds;
    private List<Long> labels;

}
