import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon';
import Label from '../../../common/Label';
import { $List, $LeftElements, $UpElements, $IssueTitle, $IssueInfo, $Assignee, $CheckBox } from './style';

const List = ({ issueId, issueTitle, labels, writer, milestone, assignees }) => {
  const [isSelected, setIsSelected] = useState(false);

  const checkBoxClickHandler = () => {
    setIsSelected((prev) => !prev);
  };

  const Labels = labels.map(({ labelId, textColor, backgroundColor, labelName }) => {
    return (
      <Label
        key={labelId}
        height={24}
        textColor={textColor}
        backgroundColor={backgroundColor}
        name={labelName}
      />
    );
  });

  return (
    <$List>
      <$LeftElements>
        <$UpElements>
          <$CheckBox type="button" onClick={checkBoxClickHandler}>
            <Icon
              name={isSelected ? 'checkBoxActive' : 'checkBoxInitial'}
              fill={isSelected ? '#007AFF' : '#D9DBE9'}
            />
          </$CheckBox>
          <$IssueTitle>
            <Icon name="alertCircle" fill="#007AFF" />
            <span>{issueTitle}</span>
            {Labels}
            <Label />
          </$IssueTitle>
        </$UpElements>

        <$IssueInfo>
          <span>{`#${issueId}`}</span>
          <span>{`이 이슈가 1분전, ${writer.name}님에 의해 작성되었습니다.`}</span>
          {milestone && <Icon name="milestone" fill="#6E7191" />}
          <span>{milestone}</span>
        </$IssueInfo>
      </$LeftElements>

      <$Assignee src={assignees[0].profileImgSrc} />
    </$List>
  );
};

List.propTypes = {
  issueId: PropTypes.number.isRequired,
  issueTitle: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.object),
  writer: PropTypes.object,
  milestone: PropTypes.string,
  assignees: PropTypes.array,
};

export default List;
