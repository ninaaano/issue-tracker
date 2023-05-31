package team05.codesquad.issuetracker.repository;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import team05.codesquad.issuetracker.domain.comment.Comment;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Long> {

    @Query("SELECT `comment_id`,`writer_id`,`issue_id`,`contents`,`created_at` FROM `comment` WHERE `comment_id` = :commentId AND `issue_id` = :issueId")
    Comment findByCommentIdAndIssueId(@Param("commentId") Long commentId, @Param("issueId") Long issueId);

    @Modifying
    @Query("DELETE FROM `comment` WHERE `comment`.`comment_id`=:commentId AND `comment`.`issue_id`=:issueId")
    int deleteByCommentIdAndIssueId(@Param("commentId") Long commentId, @Param("issueId") Long issueId);

    @Query("SELECT `comment_id`, `writer_id`, `issue_id`, `contents`, `created_at` FROM `comment` WHERE `issue_id`=:issueId")
    List<Comment> findByIssueId(@Param("issueId") Long issueId);
}
