package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import team05.codesquad.issuetracker.domain.label.Label;

import java.util.List;

public interface LabelRepository extends CrudRepository<Label, Long> {
    List<Label> findAll();

    @Modifying
    @Query("UPDATE label SET title = :title, description = :description, background_color =:backgroundColor, font_color =:fontColor where label_id = :id")
    void update(@Param("id") Long id, @Param("title") String title, @Param("description") String description, @Param("backgroundColor") String backgroundColor, @Param("fontColor") String fontColor);

    @Query("SELECT l.label_id, l.title, l.description, l.background_color, l.font_color " +
            "FROM label l " +
            "LEFT OUTER JOIN label_attached_issues lai ON lai.label_id = l.label_id " +
            "WHERE lai.issue_id = :issueId")
    List<Label> findAllByIssueId(@Param("issueId") Long issueId);



}
