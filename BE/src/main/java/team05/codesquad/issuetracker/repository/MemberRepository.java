package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.member.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends CrudRepository<Member,Long> {
    Optional<Member> findById(Long id);

    @Query("SELECT m.member_id FROM member m " +
            "LEFT OUTER JOIN assignee a ON a.member_id = m.member_id " +
            "WHERE a.issue_id = :issueId")
    List<Member> findByIssueId(Long issueId);

}
