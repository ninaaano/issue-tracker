package team05.codesquad.issuetracker.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Member {

    private Long id;
    private String memberId;

    public Member(Long id, String memberId) {
        this.id = id;
        this.memberId = memberId;
    }
}
