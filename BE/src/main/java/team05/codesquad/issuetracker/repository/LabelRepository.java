package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import team05.codesquad.issuetracker.domain.label.Label;

import java.util.List;

// 리포지토리는 도메인을 알아야한다
public interface LabelRepository extends CrudRepository<Label, Long> {
    List<Label> findAll();

    // update는 반환값으로 id를 날려준다. 확장성을 위해 int로 붙여줬지만
    @Modifying
    @Query("UPDATE label SET title = :title, description = :description, background_color =:backgroundColor, font_color =:fontColor where label_id = :id")
    void update(Long id, String title, String description, String backgroundColor, String fontColor);


}
