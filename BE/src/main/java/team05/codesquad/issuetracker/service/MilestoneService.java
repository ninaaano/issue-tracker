package team05.codesquad.issuetracker.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team05.codesquad.issuetracker.domain.milestone.Milestone;
import team05.codesquad.issuetracker.dto.milestone.NewMilestoneDto;
import team05.codesquad.issuetracker.repository.MilestoneRepository;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
@Slf4j
public class MilestoneService {

    private static final boolean STATUS_DEFAULT = true;

    private final MilestoneRepository milestoneRepository;

    @Autowired
    public MilestoneService(MilestoneRepository milestoneRepository) {
        this.milestoneRepository = milestoneRepository;
    }

    public Milestone createMilestone(NewMilestoneDto newMilestoneDto) {
        log.info(">>> MilestoneService createMilestone");
        String title = newMilestoneDto.getTitle();
        String description = newMilestoneDto.getDescription();
        LocalDate deadLine = newMilestoneDto.getDeadLine();
        Milestone milestone = new Milestone(title, description, deadLine, STATUS_DEFAULT, new ArrayList<>());
        return milestoneRepository.save(milestone);
    }


}
