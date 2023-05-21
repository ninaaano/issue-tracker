package team05.codesquad.issuetracker.dto.milestone;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Getter
@Slf4j
public class NewMilestoneDto {

    private String title;
    private String description;
    private String stringDeadLine;
    private LocalDate deadLine;

    public NewMilestoneDto() {
    }

    public NewMilestoneDto(String title, String description, String stringDeadLine) {
        this.title = title;
        this.description = description;
        this.stringDeadLine = stringDeadLine;
        deadLine = deadLineConverter(stringDeadLine);
    }

    private LocalDate deadLineConverter(String stringDeadLine) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate deadLine = LocalDate.parse(stringDeadLine, formatter);
        return deadLine;
    }
}
