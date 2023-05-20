package team05.codesquad.issuetracker.domain.label;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("label")
@Setter
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@AllArgsConstructor
public class Label {
    @Id
    @Column("label_id")
    private Long id;
    private String title;
    private String description;
    private String backgroundColor;
    private String fontColor;

}
