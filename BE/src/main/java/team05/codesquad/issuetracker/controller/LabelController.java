package team05.codesquad.issuetracker.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.labeldto.LabelRequest;
import team05.codesquad.issuetracker.controller.labeldto.LabelResponse;
import team05.codesquad.issuetracker.service.LabelService;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/labels")
public class LabelController {

    private final LabelService labelService;

    // 레이블 생성하기
    @PostMapping
    public ResponseEntity<LabelResponse> createLabel(@RequestBody LabelRequest request) {
        LabelResponse responseDto = labelService.save(request);
        return ResponseEntity.ok().body(responseDto);
    }

}
