package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.member.Member;

import java.util.Optional;

public interface MemberRepository extends CrudRepository<Member,Long> {
    Optional<Member> findById(Long id);
}
