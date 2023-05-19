import styled from 'styled-components';

const $IssueListMain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
  margin-top: 24px;
  overflow: hidden;
`;

const $IssueList = styled.section`
  display: flex;
  flex-direction: column;
`;

export { $IssueList, $IssueListMain };
