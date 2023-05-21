package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team05.codesquad.issuetracker.domain.milestone.Milestone;
import team05.codesquad.issuetracker.dto.milestone.NewMilestoneDto;
import team05.codesquad.issuetracker.repository.MilestoneRepository;
import team05.codesquad.issuetracker.service.MilestoneService;

@Slf4j
@RestController
@RequestMapping("/milestone")
public class MilestoneController {

    private final MilestoneService milestoneService;

    @Autowired
    public MilestoneController(MilestoneService milestoneService) {
        this.milestoneService = milestoneService;
    }

    @PostMapping
    public Milestone createMilestone(@RequestBody NewMilestoneDto newMilestoneDto) {
        log.info(">>> MilestoneController createMilestone");
        Milestone newMilestone = milestoneService.createMilestone(newMilestoneDto);
        return newMilestone;
    }
}
