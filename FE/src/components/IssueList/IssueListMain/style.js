import styled from 'styled-components';

const $Lists = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
`;

const $IssueListMain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
  margin-top: 24px;
  overflow: hidden;
`;

export { $Lists, $IssueListMain };
