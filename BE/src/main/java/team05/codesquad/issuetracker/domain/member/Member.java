package team05.codesquad.issuetracker.domain.member;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;

@Data
public class Member {

    @Id
    @Column("member_id")
    private Long id;
    private String memberId;
    private String password;
    private String imgUrl;


}
