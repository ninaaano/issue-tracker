package team05.codesquad.issuetracker.repository;

import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.label.Label;

public interface LabelRepository extends CrudRepository<Label,Long> {
}
