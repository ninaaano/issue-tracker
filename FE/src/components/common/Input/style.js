import styled, { css } from 'styled-components';

const $Label = styled.label`
  width: ${({ labelText }) => (labelText ? '72px' : '0px')};

  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
  line-height: ${({ theme }) => theme.fontSize.S.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const textInput = css`
  & > input {
    width: 100%;

    color: ${({ hasValue, theme }) => theme.colors.neutral.text[hasValue ? 'strong' : 'weak']};
    font-size: ${({ theme }) => theme.fontSize.M.fontSize};
    line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
    font-weight: 400;
  }
  & > input:focus {
    color: ${({ theme }) => theme.colors.neutral.text.strong};
  }
`;

const row = css`
  flex-direction: row;
  align-items: center;
  gap: ${({ labelText }) => (labelText ? '8px' : '0px')};
`;

const column = css`
  flex-direction: column;
  justify-content: center;
`;

const flexDirection = css`
  ${({ direction }) => {
    if (direction === 'row') return row;
    if (direction === 'column') return column;

    return '';
  }}
`;

const $Input = styled.div`
  display: flex;
  ${flexDirection}

  height: ${({ size }) => (size === 'S' ? '40px' : '56px')};
  padding: 0 24px;

  border-radius: 14px;

  background-color: ${({ isFocused, theme }) => {
    return theme.colors.neutral.background[isFocused ? 'strong' : 'bold'];
  }};
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};

  ${textInput};
`;

export { $Input, $Label };
