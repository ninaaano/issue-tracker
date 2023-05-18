package team05.codesquad.issuetracker.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
@Builder
public class Issue {

    @Id
    private Long issueId;
    private int issueWriter;
    private String issueTitle;
    private String issueContents;

}
