package team05.codesquad.issuetracker.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import team05.codesquad.issuetracker.domain.milestone.Milestone;
import team05.codesquad.issuetracker.dto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.dto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.repository.MilestoneRepository;

import java.util.ArrayList;

@Slf4j
@Service
@Transactional
public class MilestoneService {

    private static final boolean STATUS_DEFAULT = true;

    private final MilestoneRepository milestoneRepository;

    @Autowired
    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    public MilestoneCreateResponse createMilestone(@RequestBody MilestoneCreateRequest request) {
        Milestone milestone = new Milestone(request.getTitle(), request.getDescription(), request.getDeadLine(), STATUS_DEFAULT, new ArrayList<>());
        Milestone savedMilestone = milestoneRepository.save(milestone);
        return new MilestoneCreateResponse(savedMilestone.getId());
    }

//    public List<Milestone> allMilestones() {
//        log.info(">>> MilestoneService allMilestones");
//        List<Milestone> allMilestones = milestoneRepository.findAll();
//    }
}
