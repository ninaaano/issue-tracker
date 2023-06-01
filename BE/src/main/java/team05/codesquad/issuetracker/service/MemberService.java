package team05.codesquad.issuetracker.service;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;
import team05.codesquad.issuetracker.controller.memberdto.response.MembersResponse;
import team05.codesquad.issuetracker.domain.member.Member;
import team05.codesquad.issuetracker.repository.MemberRepository;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberResponse findById(Long memberId){
        Member member = memberRepository.findById(memberId).orElseThrow(IllegalArgumentException::new);
        return MemberResponse.from(member);
    }

    public MembersResponse findAll(){
        return MembersResponse.from(memberRepository.findAll());
    }

}
