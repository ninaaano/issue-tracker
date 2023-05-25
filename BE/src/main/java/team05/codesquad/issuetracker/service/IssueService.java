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


    public List<Issue> getAllIssues() {
        List<Issue> issueList = new ArrayList<>();
        issueRepository.findAll().forEach(issueList::add);
        return issueList;
    }

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

    public Issue createIssue(Issue issue) {
        return issueRepository.save(issue);
    }

}
