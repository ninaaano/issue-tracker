package team05.codesquad.issuetracker.domain.label;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("label")
@Getter
public class Label {
    @Id
    @Column("id")
    private Long id;
    private String title;
    private String description;
    private String backgroundColor;
    private String fontColor;

}
