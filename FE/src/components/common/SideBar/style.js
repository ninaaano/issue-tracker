import styled from 'styled-components';

const $SideBar = styled.section`
  display: flex;
  flex-direction: column;
  width: 288px;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
`;

export { $SideBar };
