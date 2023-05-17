package team05.codesquad.issuetracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@ToString
@Getter
@Setter
public class Issue {

    @NotBlank
    private String title;
    @NotBlank
    private String content;

}
