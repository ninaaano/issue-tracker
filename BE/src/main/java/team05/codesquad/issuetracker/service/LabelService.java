package team05.codesquad.issuetracker.service;

import com.amazonaws.services.kms.model.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team05.codesquad.issuetracker.controller.labeldto.LabelRequest;
import team05.codesquad.issuetracker.controller.labeldto.LabelResponse;
import team05.codesquad.issuetracker.controller.labeldto.LabelsResponse;
import team05.codesquad.issuetracker.domain.label.Label;
import team05.codesquad.issuetracker.repository.LabelRepository;

import javax.lang.model.type.ErrorType;

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

    public LabelResponse edit(Long id, LabelRequest request) {
        Label targetLabel = labelRepository.findById(id).orElseThrow(() -> new NotFoundException(HttpStatus.NOT_FOUND + "정보를 찾을 수 없습니다"));
        targetLabel.editLabel(request.getTitle(), request.getDescription(), request.getBackgroundColor(), request.getFontColor());
        return LabelResponse.from(targetLabel);
    }


}
