import styled from 'styled-components';

const $IssueDetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin-bottom: 16px;
`;

const $TitleWrapper = styled.div`
  display: flex;
`;

const $IssueTitle = styled.div`
  margin-right: 8px;
  font-size: ${({ theme }) => theme.fontSize.XXL.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.text.strong};
`;

const $IssueId = styled.div`
  font-size: ${({ theme }) => theme.fontSize.XXL.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

const $Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

// 열린이슈 or 닫힌이슈 , 몇분전에 열렸는지, 코멘트 개수.
const $IssueDetailInfo = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  padding-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

// 이슈 이름, 제목편집, 이슈닫기 버튼
const $IssueDetailHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

const $IssueInfoText = styled.div`
  margin-left: 8px;
`;

export {
  $IssueDetailHeader,
  $IssueDetailTitle,
  $TitleWrapper,
  $IssueTitle,
  $IssueId,
  $Buttons,
  $IssueDetailInfo,
  $IssueInfoText,
};
