package team05.codesquad.issuetracker.domain.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("assignee")
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Assignee {
    @Column("member_id")
    private Long memberId;
    @Column("issue_id")
    private Long issueId;
}
