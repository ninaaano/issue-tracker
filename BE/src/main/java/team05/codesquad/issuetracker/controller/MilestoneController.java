package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.dto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.dto.request.MilestoneUpdateRequest;
import team05.codesquad.issuetracker.dto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.dto.response.MilestoneListResponse;
import team05.codesquad.issuetracker.dto.response.MilestoneUpdateResponse;
import team05.codesquad.issuetracker.service.MilestoneService;

@Slf4j
@RestController
@RequestMapping("/milestones")
public class MilestoneController {

    private final MilestoneService milestoneService;

    @Autowired
    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

//    @GetMapping
//    public List<Milestone> allMilestones() {
//        log.info(">>> MilestoneController allMilestones");
//
//    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public MilestoneCreateResponse createMilestone(@RequestBody MilestoneCreateRequest request) {
        log.info(">>> MilestoneController createMilestone");
        return milestoneService.createMilestone(request);
    }
}
