package team05.codesquad.issuetracker.domain.milestone;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import team05.codesquad.issuetracker.domain.Issue;
import team05.codesquad.issuetracker.dto.request.MilestoneCreateRequest;

import java.time.LocalDate;
import java.util.List;

@Builder @Getter
@AllArgsConstructor
@Table("milestone")
public class Milestone {

    @Id
    @Column("milestone_id")
    private Long id;

    @Column("title")
    private String title;

    @Column("description")
    private String description;

    @Column("deadline")
    private LocalDate deadLine;

    @Column("status")
    private boolean status;

    @MappedCollection
    private List<Issue> issues;

    public Milestone() {
    }

    public Milestone(Long id, String title, String description, LocalDate deadLine, boolean status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadLine = deadLine;
        this.status = status;
    }

    @Builder
    public Milestone(String title, String description, LocalDate deadLine, boolean status) {
        this.title = title;
        this.description = description;
        this.deadLine = deadLine;
        this.status = status;
    }

    public static Milestone toEntity(MilestoneCreateRequest request) { // DTO를 Entity로 변환해주는 메서드
        return Milestone.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .deadLine(request.getDeadLine())
                .status(true)
                .build();
    }

    public void updateProperties(String title, String description, LocalDate deadLine) {
        this.title = title;
        this.description = description;
        this.deadLine = deadLine;
    }

    public long countOpenIssues(){
        return issues.stream()
                .filter(Issue::isStatus)
                .count();
    }

    public long countCloseIssues(){
        return issues.stream()
                .filter(issue -> !issue.isStatus()) // Issue 객체의 status 필드가 false인 경우 필터링
                .count();
    }

}
