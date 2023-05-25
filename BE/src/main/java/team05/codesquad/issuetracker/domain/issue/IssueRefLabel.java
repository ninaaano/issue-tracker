package team05.codesquad.issuetracker.domain.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("issues_with_labels")
@AllArgsConstructor
@Getter
@Setter
@ToString
public class IssueRefLabel {
    @Column("label_id")
    private Long labelId;
    @Column("issue_id")
    private Long issueId;
}
