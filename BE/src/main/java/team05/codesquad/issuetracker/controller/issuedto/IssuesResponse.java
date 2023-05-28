package team05.codesquad.issuetracker.controller.issuedto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class IssuesResponse {
    List<IssueResponse> issues;
}
