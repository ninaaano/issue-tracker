package team05.codesquad.issuetracker.controller.labeldto;

import lombok.*;
import team05.codesquad.issuetracker.domain.label.Label;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class LabelResponse {

    private Long id;
    private String title;
    private String description;
    private String backgroundColor;
    private String fontColor;

    public static LabelResponse from(Label label){
        return new LabelResponse(label.getId(), label.getTitle(), label.getDescription(), label.getBackgroundColor(), label.getFontColor());
    }

}
