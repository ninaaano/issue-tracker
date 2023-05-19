import styled from 'styled-components';

const $Lists = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral.background.strong};
`;

export { $Lists };
