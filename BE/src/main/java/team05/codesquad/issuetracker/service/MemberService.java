package team05.codesquad.issuetracker.service;

import lombok.Getter;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.domain.Member;

import java.util.List;

@Getter
@Transactional
public class MemberService {
    private String name;
    private List<Member> memberList;

    public MemberService(String name, List<Member> memberList) {
        this.name = name;
        this.memberList = memberList;
    }
}
