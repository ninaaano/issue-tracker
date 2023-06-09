package team05.codesquad.issuetracker.controller.memberdto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import team05.codesquad.issuetracker.domain.member.Member;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@Getter
@Setter
public class MembersResponse {

    private List<MemberResponse> data;

    public MembersResponse(List<MemberResponse> members) {
        this.data = members;
    }

    public static MembersResponse from(List<Member> members) {
        return new MembersResponse(members.stream()
                .map(MemberResponse::from)
                .collect(Collectors.toList()));
    }
}
