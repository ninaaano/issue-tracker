import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';

import {
  $IssueDetailHeader,
  $IssueDetailTitle,
  $TitleWrapper,
  $IssueTitle,
  $IssueId,
  $Buttons,
  $IssueDetailInfo,
  $IssueInfoText,
} from './style';
import Icon from '../../common/Icon';
import Label from '../../common/Label';

const IssueDetailHeader = ({ issue }) => {
  return (
    <$IssueDetailHeader>
      <$IssueDetailTitle>
        <$TitleWrapper>
          <$IssueTitle>{issue.issueTitle}</$IssueTitle>
          <$IssueId>{`#${issue.issueId}`}</$IssueId>
        </$TitleWrapper>

        <$Buttons>
          <Button type="outline" size="S">
            <Icon name="edit" />
            <p>제목 편집</p>
          </Button>
          <Button type="outline" size="S">
            <Icon name="archive" />
            <p>이슈 닫기</p>
          </Button>
        </$Buttons>
      </$IssueDetailTitle>

      <$IssueDetailInfo>
        {issue.isOpened ? (
          <Label
            height="32"
            name="열린 이슈"
            textColor="#FEFEFE"
            backgroundColor="#007AFF"
            iconName="alertCircle"
          />
        ) : (
          <Label
            height="32"
            name="닫힌 이슈"
            textColor="#FEFEFE"
            backgroundColor="#FF3B30"
            iconName="archive"
          />
        )}
        <$IssueInfoText>
          {`이 이슈가 ${1}분 전에 ${issue.writer.name}님에 의해 ${
            issue.isOpened ? '열렸습니다' : '닫혔습니다'
          } ∙ 코멘트 ${issue.comment.length}개 `}
        </$IssueInfoText>
      </$IssueDetailInfo>
    </$IssueDetailHeader>
  );
};

IssueDetailHeader.propTypes = {
  issue: PropTypes.object.isRequired,
};

export default IssueDetailHeader;
