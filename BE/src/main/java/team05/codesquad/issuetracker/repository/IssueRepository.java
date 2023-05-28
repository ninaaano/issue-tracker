package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import team05.codesquad.issuetracker.domain.issue.Issue;

import java.util.List;
import java.util.Optional;

public interface IssueRepository extends CrudRepository<Issue, Long> {

    @Query("SELECT * FROM issue WHERE is_opened=:isOpened")
    public List<Issue> findByIsOpened(@Param("isOpened") boolean isOpened);

}
