package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneUpdateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneListResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneUpdateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneWithIssuesResponse;
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

    @GetMapping
    public ResponseEntity<MilestoneListResponse> allMilestones() {
        log.info(">>> MilestoneController allMilestones");
        MilestoneListResponse milestoneListResponse = milestoneService.allMilestoneDto();
        return ResponseEntity.ok().body(milestoneListResponse);
    }

    @PostMapping
    public ResponseEntity<ResponseData<MilestoneCreateResponse>> createMilestone(@RequestBody MilestoneCreateRequest request) {
        log.info(">>> MilestoneController createMilestone");
        ResponseData<MilestoneCreateResponse> responseData = new ResponseData<>(milestoneService.createMilestone(request));
        return ResponseEntity.ok().body(responseData);
    }

    @GetMapping("/{milestoneId}")
    public ResponseEntity<ResponseData<MilestoneWithIssuesResponse>> milestoneWithIssues(@PathVariable Long milestoneId) {
        log.info(">>> MilestoneController milestoneWithIssues");
        ResponseData<MilestoneWithIssuesResponse> responseData = new ResponseData<>(milestoneService.getMilestoneWithIssues(milestoneId));
        return ResponseEntity.ok().body(responseData);
    }

    @DeleteMapping("/{id}")
    public void deleteMilestone(@PathVariable Long id) {
        log.info(">>> MilestoneController deleteMilestone");
        milestoneService.deleteMilestone(id);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ResponseData<MilestoneUpdateResponse>> updateMilestone(@PathVariable Long id, @RequestBody MilestoneUpdateRequest request) {
        log.info(">>> MilestoneController updateMilestone");
        ResponseData<MilestoneUpdateResponse> responseData = new ResponseData<>(milestoneService.updateMilestone(id, request));
        return ResponseEntity.ok().body(responseData);
    }
}
