package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.issuedto.request.IssueRequest;
import team05.codesquad.issuetracker.controller.issuedto.response.IssueResponse;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.service.IssueService;

import java.net.URI;

@Slf4j
@RestController
@RequestMapping("/issues")
public class IssueController {

    private final IssueService issueService;

    @Autowired
    public IssueController(IssueService issueService) {
        this.issueService = issueService;
    }

    // 기본화면일때, 다시 openIssue눌렀을때
    @GetMapping
    public ResponseEntity<ResponseData<IssuesResponse>> getIssues(@RequestParam(defaultValue = "true") Boolean isOpened) {
        ResponseData<IssuesResponse> responseData = new ResponseData<>(issueService.findAll());
        return ResponseEntity.ok().body(responseData);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<ResponseData<IssueResponse>> findById(@PathVariable Long issueId) {
        ResponseData<IssueResponse> responseData = new ResponseData<>(issueService.findById(issueId));
        return ResponseEntity.ok().body(responseData);
    }

    @PostMapping
    public ResponseEntity<ResponseData<IssueResponse>> writeIssue(@RequestBody IssueRequest issueRequest) {
        IssueResponse createdIssue = issueService.createIssue(issueRequest);
        ResponseData<IssueResponse> responseData = new ResponseData<>(createdIssue);
        return ResponseEntity.created(URI.create("/issues/" + createdIssue.getIssueId())).body(responseData);
    }

    @PatchMapping("/{issueId}")
    public ResponseEntity<ResponseData<IssueResponse>> editTitle(@PathVariable Long issueId, @RequestBody IssueRequest issueRequest) {
        ResponseData<IssueResponse> responseData = new ResponseData<>(issueService.editTitle(issueId, issueRequest));
        return ResponseEntity.ok().body(responseData);
    }
}
