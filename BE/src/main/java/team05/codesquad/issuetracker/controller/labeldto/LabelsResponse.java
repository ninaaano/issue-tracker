package team05.codesquad.issuetracker.controller.labeldto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team05.codesquad.issuetracker.domain.label.Label;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LabelsResponse {
    private List<Label> labels;
    private int totalCount;

}
