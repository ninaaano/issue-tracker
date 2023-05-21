package team05.codesquad.issuetracker.domain.comment;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Table("Comment")
@Setter
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class Comment {

    @Id
    @Column("comment_id")
    private Long id;
    private long writerId;
    private long issueId;
    private String content;
    @CreatedDate
    private LocalDate createAt;

}
