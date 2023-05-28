package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.issuedto.IssueResponse;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.domain.issue.IssueRefLabel;
import team05.codesquad.issuetracker.repository.IssueRepository;
import team05.codesquad.issuetracker.repository.LabelRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@Service
@Transactional
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    private final LabelRepository labelRepository;


    // issueRepo에서 table에 대한 내용만 가져옴 -> table에 있는 param id로 label, issueWithLabel join
    public Issue findById(Long issueId) {
        Issue issue = issueRepository.findById(issueId).orElseThrow();
        issue.getIssueLabels()
                .stream()
                .map(IssueRefLabel::getLabelId)
                .collect(Collectors.toList())
                .forEach(labelId -> issue.addLabel(labelRepository.findById(labelId)
                        .orElseThrow()));
        return issue;
    }

    // 열린 이슈만 가져와서 리스트로 만들어주고 -> 그럼 이슈 아이디 여러개가 있으니까 거기에 label들 가져와야함
    public List<Issue> findByOpenIssue() {
        List<Issue> openIssues = issueRepository.findByIsOpened(true);
        List<Issue> responseList = new ArrayList<>();   // 모든 열린 이슈들, 각각의 라벨
        for (Issue openIssue : openIssues) {
            responseList.add(findById(openIssue.getId()));
        }
        return responseList;
    }

    // 닫힌 이슈 목록 가져오기
    public List<Issue> findByCloseIssue(){
        List<Issue> closeIssues = issueRepository.findByIsOpened(false);
        List<Issue> responseList = new ArrayList<>();   // 모든 열린 이슈들, 각각의 라벨
        for (Issue closeIssue : closeIssues) {
            responseList.add(findById(closeIssue.getId()));
        }
        return responseList;
    }

    public Issue createIssue(Issue issue) {
        return issueRepository.save(issue);
    }

}
