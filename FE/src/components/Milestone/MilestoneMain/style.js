import styled from 'styled-components';

const $MilestoneMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  width: 1280px;
  margin-top: 24px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
  & > div:last-child {
    border-bottom: none;
  }
`;

export { $MilestoneMain };
