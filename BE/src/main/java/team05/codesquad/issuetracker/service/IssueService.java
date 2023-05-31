package team05.codesquad.issuetracker.service;

import com.amazonaws.services.kms.model.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.issuedto.request.IssueRequest;
import team05.codesquad.issuetracker.controller.issuedto.response.IssueResponse;
import team05.codesquad.issuetracker.controller.issuedto.response.IssuesResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.issue.IssueRefLabel;
import team05.codesquad.issuetracker.domain.member.Assignee;
import team05.codesquad.issuetracker.repository.IssueRepository;
import team05.codesquad.issuetracker.repository.LabelRepository;
import team05.codesquad.issuetracker.repository.MemberRepository;
import team05.codesquad.issuetracker.repository.MilestoneRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;
    private final MilestoneRepository milestoneRepository;
    private final MemberRepository memberRepository;

    public IssueResponse createIssue(IssueRequest request) {
        Issue issue = request.toEntity(null);
        if (request.getMilestoneId() != null) {
            issue = request.toEntity(milestoneRepository.findById(request.getMilestoneId()).orElseThrow());
        }
        return IssueResponse.from(issueRepository.save(issue));
    }

    // issueRepo에서 table에 대한 내용만 가져옴 -> table에 있는 param id로 label, issueWithLabel join
    public IssueResponse findById(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow(IllegalArgumentException::new);
        issue.getIssueLabels()
                .stream()
                .map(IssueRefLabel::getLabelId)
                .collect(Collectors.toList())
                .forEach(labelId -> issue.addLabel(labelRepository.findById(labelId)
                        .orElseThrow()));
        issue.getIssueAssignees()
                .stream()
                .map(Assignee::getMemberId)
                .collect(Collectors.toList())
                .forEach(memberId -> issue.addAssignee(memberRepository.findById(memberId)
                        .orElseThrow()));
        return IssueResponse.from(issue);
    }

    public IssuesResponse findAll() {
        List<IssueResponse> openList = getIssueResponses(true);
        List<IssueResponse> closeList = getIssueResponses(false);

        return new IssuesResponse(openList, closeList);
    }

    private List<IssueResponse> getIssueResponses(boolean isOpened) {
        List<Issue> findIssues = issueRepository.findByIsOpened(isOpened);
        List<IssueResponse> responseList = new ArrayList<>();   // 모든 열린 이슈들, 각각의 라벨
        for (Issue issue : findIssues) {
            issue.setLabels(labelRepository.findAllByIssueId(issue.getId()));
            responseList.add(IssueResponse.from(issue));
        }
        return responseList;
    }

    public IssueResponse editTitle(Long id, IssueRequest request){
        Issue issue = issueRepository.findById(id).orElseThrow(()->new NotFoundException(HttpStatus.NOT_FOUND + "정보를 찾을 수 없습니다"));
        issue.editIssue(request.getTitle());
        issueRepository.editTitle(issue.getId(), issue.getTitle());
        return IssueResponse.from(issue);
    }


}
