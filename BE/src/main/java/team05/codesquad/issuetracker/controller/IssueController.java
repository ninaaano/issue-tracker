package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.domain.Issue;

import javax.validation.Valid;
import java.util.Map;

@Slf4j
@RestController
public class IssueController {

    // HttpMethod
    // GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, TRACE, CONNECT
    // 글 등록
    // POST Method

    @GetMapping("/issues")
    public String get() {
        return "issue page";
    }

    @PostMapping("/issues")
    public String post(@RequestBody @Valid Issue issue) throws Exception {
        log.info("issue={}",issue.toString());
        return "issue page";
    }

}
