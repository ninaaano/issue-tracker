package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.commentdto.request.CommentCreateRequest;
import team05.codesquad.issuetracker.controller.commentdto.request.CommentUpdateRequest;
import team05.codesquad.issuetracker.controller.commentdto.response.CommentCreateResponse;
import team05.codesquad.issuetracker.controller.commentdto.response.CommentUpdateResponse;
import team05.codesquad.issuetracker.domain.comment.Comment;
import team05.codesquad.issuetracker.service.CommentService;

@Slf4j
@RestController
@RequestMapping("/issues")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping("/{issueId}")
    @ResponseStatus(HttpStatus.OK)
    public CommentCreateResponse createComment(@PathVariable Long issueId, @RequestBody CommentCreateRequest request) {
        return commentService.createComment(issueId, request);
    }

    @DeleteMapping("/{issueId}/{commentId}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteComment(@PathVariable Long issueId, @PathVariable Long commentId) {
        log.info(">>> CommentController deleteComment()");
        commentService.deleteComment(issueId, commentId);
    }

    @PatchMapping("/{issueId}/{commentId}")
    @ResponseStatus(HttpStatus.OK)
    public CommentUpdateResponse updateComment(@PathVariable Long issueId, @PathVariable Long commentId, @RequestBody CommentUpdateRequest request) {
        log.info(">>> CommentController updateComment()");
        return commentService.updateComment(issueId, commentId, request);
    }
}
