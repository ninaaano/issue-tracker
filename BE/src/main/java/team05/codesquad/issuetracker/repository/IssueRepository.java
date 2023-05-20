package team05.codesquad.issuetracker.repository;

import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.util.Optional;

public interface IssueRepository extends CrudRepository<Issue, Long> {
}
