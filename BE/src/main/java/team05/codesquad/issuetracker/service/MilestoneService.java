package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import team05.codesquad.issuetracker.domain.milestone.Milestone;
import team05.codesquad.issuetracker.controller.milestonedto.MilestoneDto;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneUpdateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneListResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneUpdateResponse;
import team05.codesquad.issuetracker.repository.MilestoneRepository;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MilestoneService {

    private static final boolean STATUS_DEFAULT = true;

    private final MilestoneRepository milestoneRepository;

    public MilestoneCreateResponse createMilestone(@RequestBody MilestoneCreateRequest request) { // Milestone 생성
        Milestone milestone = Milestone.toEntity(request);
        Milestone savedMilestone = milestoneRepository.save(milestone);
        return new MilestoneCreateResponse(savedMilestone.getId());
    }

    public MilestoneListResponse allMilestoneDto() { // 모든 Milestone 조회

        log.info(">>> MilestoneService allMilestoneDto");
        Iterable<Milestone> milestones = milestoneRepository.findAll();

        List<MilestoneDto> milestoneDto = new ArrayList<>();
        for (Milestone milestone : milestones) {
            milestoneDto.add(MilestoneDto.of(milestone));
        }

        return new MilestoneListResponse(milestoneDto);
    }

    public void deleteMilestone(Long milestoneId) {
        log.info(">>> MilestoneService deleteMilestone");
        Milestone foundMilestone = milestoneRepository.findById(milestoneId).orElseThrow();
        milestoneRepository.delete(foundMilestone);
    }

    public MilestoneUpdateResponse updateMilestone(long milestoneId, MilestoneUpdateRequest request) {
        log.info(">>> MilestoneService updateMilestone");
        Milestone targetMilestone = milestoneRepository.findById(milestoneId).orElseThrow();
        targetMilestone.updateProperties(request.getTitle(), request.getDescription(), request.getDeadLine());
        log.info(">>> targetMilestone title = {}", targetMilestone.getTitle());
        log.info(">>> targetMilestone description = {}", targetMilestone.getDescription());
        milestoneRepository.save(targetMilestone);
        return MilestoneUpdateResponse.builder()
                .title(targetMilestone.getTitle())
                .description(targetMilestone.getDescription())
                .deadLine(targetMilestone.getDeadLine())
                .build();
    }
}
