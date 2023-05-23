package team05.codesquad.issuetracker.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import team05.codesquad.issuetracker.controller.labeldto.LabelRequest;
import team05.codesquad.issuetracker.controller.labeldto.LabelResponse;
import team05.codesquad.issuetracker.controller.labeldto.LabelsResponse;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.service.LabelService;

import java.util.List;


@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/labels")
public class LabelController {

    private final LabelService labelService;



    // 전체 목록 조회
    @GetMapping
    public ResponseEntity<Iterable<Label>> getLabels() {
        Iterable<Label> labelList = labelService.findAll();
        return ResponseEntity.ok().body(labelList);
    }


    // 레이블 생성하기
    @PostMapping
    public ResponseEntity<LabelResponse> createLabel(@RequestBody LabelRequest request) {
        LabelResponse response = labelService.save(request);
        return ResponseEntity.ok().body(response);
    }

}
