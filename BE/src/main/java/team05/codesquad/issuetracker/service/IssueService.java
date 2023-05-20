package team05.codesquad.issuetracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.repository.IssueRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

@Service
@Transactional
public class IssueService {

    private final IssueRepository issueRepository;

    @Autowired
    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<Issue> getAllIssues() {
        List<Issue> issueList = new ArrayList<>();
        issueRepository.findAll().forEach(issueList::add);
        return issueList;
    }

    public Issue findByIssueId(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow();
    }

    public Issue createIssue(Issue issue) {
        return issueRepository.save(issue);
    }

}
