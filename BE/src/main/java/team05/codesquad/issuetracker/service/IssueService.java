package team05.codesquad.issuetracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team05.codesquad.issuetracker.domain.issue.Issue;
import team05.codesquad.issuetracker.repository.IssueRepository;

import java.util.List;

@Service
public class IssueService {

    private final IssueRepository issueRepository;

    @Autowired
    public IssueService(IssueRepository issueRepository) {
        this.issueRepository = issueRepository;
    }

    public List<Issue> getAllIssues() {
        return (List<Issue>) issueRepository.findAll();
    }

    public Issue findByIssueId(Long issueId) {
        return issueRepository.findById(issueId).orElseThrow();
    }

    public Issue createIssue(Issue issue) {
        return issueRepository.save(issue);
    }

}
