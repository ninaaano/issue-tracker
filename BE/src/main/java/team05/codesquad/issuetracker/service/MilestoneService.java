package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneWithIssuesResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.milestone.Milestone;
import team05.codesquad.issuetracker.controller.milestonedto.MilestoneDto;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneCreateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.request.MilestoneUpdateRequest;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneCreateResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneListResponse;
import team05.codesquad.issuetracker.controller.milestonedto.response.MilestoneUpdateResponse;
import team05.codesquad.issuetracker.repository.IssueRepository;
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
    private final IssueRepository issueRepository;

    public MilestoneCreateResponse createMilestone(@RequestBody MilestoneCreateRequest request) { // Milestone 생성
        Milestone milestone = Milestone.toEntity(request);
        Milestone savedMilestone = milestoneRepository.save(milestone);
        return new MilestoneCreateResponse(savedMilestone.getId());
    }

    public MilestoneListResponse allMilestoneDto() { // 모든 Milestone 조회

        log.info(">>> MilestoneService allMilestoneDto");
        Iterable<Milestone> milestones = milestoneRepository.findAll();

        List<Issue> issues;
        List<MilestoneDto> milestoneDto = new ArrayList<>();
        for (Milestone milestone : milestones) {
            issues = issueRepository.findByMilestoneId(milestone.getId());
            milestoneDto.add(MilestoneDto.of(milestone, countOpenIssues(issues), countClosedIssues(issues)));
        }

        return new MilestoneListResponse(milestoneDto);
    }

    public MilestoneWithIssuesResponse getMilestoneWithIssues(Long milestoneId) {
        log.info(">>> MilestoneService getMilestoneWithIssues");

        Milestone milestone = milestoneRepository.findById(milestoneId).orElseThrow();
        List<Issue> issues = issueRepository.findByMilestoneId(milestoneId);
        return new MilestoneWithIssuesResponse(MilestoneDto.of(milestone, issues));
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

    public long countOpenIssues(List<Issue> issues){
        return issues.stream()
                .filter(Issue::getIsOpened)
                .count();
    }

    public long countClosedIssues(List<Issue> issues){
        return issues.stream()
                .filter(issue -> !issue.getIsOpened()) // Issue 객체의 status 필드가 false인 경우 필터링
                .count();
    }
}
