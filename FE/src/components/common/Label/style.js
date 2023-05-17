import styled from 'styled-components';

const $Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  width: max-content;
  height: ${({ height }) => `${height}px`};
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme, textColor }) => {
    return textColor === 'dark' ? theme.colors.neutral.text.strong : theme.colors.neutral.background.strong;
  }};

  // TODO : 글씨체 바꿔보고 삭제 요망
  letter-spacing: 0.5px;

  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
`;

export { $Label };
