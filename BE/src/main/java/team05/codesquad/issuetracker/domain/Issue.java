package team05.codesquad.issuetracker.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.milestone.Milestone;

import java.time.LocalDate;

@Getter
@Builder
@Table("issue")
public class Issue {

    @Id
    @Column("id")
    private Long issueId;

    @Column("writer_id")
    private int issueWriter;

    @Column("milestone_id")
    private AggregateReference<Milestone, Long> milestoneId;

    @Column("title")
    private String issueTitle;

    @Column("contents")
    private String issueContents;

    @Column("created_at")
    private LocalDate createdAt;

    @Column("status")
    private boolean status;

}
