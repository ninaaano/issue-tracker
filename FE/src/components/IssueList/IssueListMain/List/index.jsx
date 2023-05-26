import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Icon from '../../../common/Icon';
import Label from '../../../common/Label';
import { $List, $LeftElements, $UpElements, $IssueTitle, $IssueInfo, $Assignee, $CheckBox } from './style';

const List = ({ issueId, issueTitle, label, writer, milestone, assignee, isOpened }) => {
  const [isSelected, setIsSelected] = useState(false);

  const checkBoxClickHandler = () => {
    setIsSelected((prev) => !prev);
  };

  const Labels = label.map(({ labelId, textColor, backgroundColor, labelName }) => {
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
          <Link to={`${issueId}`}>
            <$IssueTitle>
              {isOpened ? <Icon name="alertCircle" fill="#007AFF" /> : <Icon name="archive" fill="#FF3B30" />}

              <span>{issueTitle}</span>
              {Labels}
              <Label />
            </$IssueTitle>
          </Link>
        </$UpElements>

        <$IssueInfo>
          <span>{`#${issueId}`}</span>
          <span>{`이 이슈가 1분전, ${writer.name}님에 의해 작성되었습니다.`}</span>
          {milestone && <Icon name="milestone" fill="#6E7191" />}
          <span>{milestone.milestoneName}</span>
        </$IssueInfo>
      </$LeftElements>
      {assignee.length !== 0 && <$Assignee src={writer.url} />}
    </$List>
  );
};

List.propTypes = {
  issueId: PropTypes.number.isRequired,
  issueTitle: PropTypes.string.isRequired,
  label: PropTypes.arrayOf(PropTypes.object),
  writer: PropTypes.object,
  milestone: PropTypes.string,
  assignee: PropTypes.array,
  isOpened: PropTypes.bool.isRequired,
};

export default List;
