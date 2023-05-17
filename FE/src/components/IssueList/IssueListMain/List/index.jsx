import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../common/Icon';
import Label from '../../../common/Label';
import { $List, $LeftElements, $UpElements, $IssueTitle, $IssueInfo, $Assignee } from './style';

const List = ({ issueId, issueTitle, labels, writer, milestone }) => {
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
          <Icon name="checkBoxInitial" />
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

      <$Assignee />
    </$List>
  );
};

List.propTypes = {
  issueId: PropTypes.number.isRequired,
  issueTitle: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.object),
  writer: PropTypes.object,
  milestone: PropTypes.string,
};

export default List;
