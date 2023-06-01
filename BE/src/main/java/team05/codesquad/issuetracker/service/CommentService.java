package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import team05.codesquad.issuetracker.controller.commentdto.request.CommentCreateRequest;
import team05.codesquad.issuetracker.controller.commentdto.request.CommentUpdateRequest;
import team05.codesquad.issuetracker.controller.commentdto.response.CommentCreateResponse;
import team05.codesquad.issuetracker.controller.commentdto.response.CommentUpdateResponse;
import team05.codesquad.issuetracker.domain.comment.Comment;
import team05.codesquad.issuetracker.repository.CommentRepository;
import team05.codesquad.issuetracker.repository.IssueRepository;
import team05.codesquad.issuetracker.repository.MemberRepository;

import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;

    public CommentCreateResponse createComment(Long issueId, CommentCreateRequest request) { // Comment 생성
        log.info(">>> CommentService createComment() issueId = {}", issueId);
        Comment comment = Comment.toEntity(issueId, request);
        Comment savedComment = commentRepository.save(comment);
        return new CommentCreateResponse(savedComment.getId());
    }

    public void deleteComment(Long issueId, Long commentId) { // Comment 삭제
        commentRepository.deleteByCommentIdAndIssueId(commentId, issueId);
    }

    public CommentUpdateResponse updateComment(Long issueId, Long commentId, CommentUpdateRequest request) {
        log.info(">>> CommentService updateComment()");
        Comment targetComment = commentRepository.findByCommentIdAndIssueId(commentId, issueId);
        log.info(">>> CommentService updateComment targetComment.getContents = {}", targetComment.getContents());
        targetComment.updateProperties(request.getContents());
        commentRepository.save(targetComment);
        return CommentUpdateResponse.builder()
                .contents(targetComment.getContents())
                .build();
    }


}
