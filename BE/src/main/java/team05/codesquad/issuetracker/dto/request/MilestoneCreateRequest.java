package team05.codesquad.issuetracker.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;

@Slf4j
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MilestoneCreateRequest {

    private String title;
    private String description;
    private LocalDate deadLine;

}
