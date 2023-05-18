package team05.codesquad.issuetracker.repository;

import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.issue.Issue;

public interface IssueRepository extends CrudRepository<Issue, Long> {
}
