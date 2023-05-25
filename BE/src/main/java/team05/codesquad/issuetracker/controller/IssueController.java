package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.issuedto.IssueResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.service.IssueService;

import java.util.List;

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
    @GetMapping()
    public List<Issue> getIssues() {
        return issueService.findByOpenIssue();
    }

    @GetMapping("/{issueId}")
    public IssueResponse findById(@PathVariable Long issueId) {
        return IssueResponse.from(issueService.findById(issueId));
    }

    @PostMapping
    public ResponseEntity<Issue> writeIssue(@RequestBody Issue issue) {
        Issue createdIssue = issueService.createIssue(issue);
        return new ResponseEntity<>(createdIssue, HttpStatus.CREATED);
    }
}
