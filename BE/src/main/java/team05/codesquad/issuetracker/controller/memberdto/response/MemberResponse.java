package team05.codesquad.issuetracker.controller.memberdto.response;

import lombok.Builder;
import lombok.Getter;
import team05.codesquad.issuetracker.domain.member.Member;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
public class MemberResponse {
    private Long userId;
    private String name;
    private String url;

    public static MemberResponse from(Member member){
        return new MemberResponse(member.getId(), member.getName(), member.getImgUrl());
    }

    public static List<MemberResponse> from(List<Member> members) {
        return members.stream().map(MemberResponse::from).collect(Collectors.toUnmodifiableList());
    }
}
