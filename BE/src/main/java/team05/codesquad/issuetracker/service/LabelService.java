package team05.codesquad.issuetracker.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.labeldto.LabelRequest;
import team05.codesquad.issuetracker.controller.labeldto.LabelResponse;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.repository.LabelRepository;

@Service
@Transactional
@RequiredArgsConstructor
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelResponse save(LabelRequest request) {
        Label label = request.toEntity();
        Label saveLabel = labelRepository.save(label);
        return LabelResponse.from(saveLabel);
    }

    public Iterable<Label> findAll() {
        return labelRepository.findAll();
    }


}
