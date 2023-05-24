import styled from 'styled-components';

const $Lists = styled.ul`
  display: flex;
  flex-direction: column;

  & > li:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  }

  & > li:last-child {
    border-radius: 0 0 16px 16px;
  }
`;

const $IssueListMain = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
  margin-top: 24px;
`;

export { $Lists, $IssueListMain };
