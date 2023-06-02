package team05.codesquad.issuetracker.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team05.codesquad.issuetracker.controller.memberdto.response.MemberResponse;
import team05.codesquad.issuetracker.controller.memberdto.response.MembersResponse;
import team05.codesquad.issuetracker.service.MemberService;

@Slf4j
@RestController
@RequestMapping("/users")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ResponseData<MemberResponse>> findById(@PathVariable Long userId){
        ResponseData<MemberResponse> responseData = new ResponseData<>(memberService.findById(userId));
        return ResponseEntity.ok().body(responseData);
    }

    @GetMapping
    public ResponseEntity<MembersResponse> getMembers(){
        return ResponseEntity.ok().body(memberService.findAll());
    }
}
