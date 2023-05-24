import styled, { css } from 'styled-components';

const labelFont = css`
  font-size: ${({ hasValue, theme }) => theme.fontSize[hasValue ? 'S' : 'M'].fontSize};
  line-height: ${({ hasValue, theme }) => theme.fontSize[hasValue ? 'S' : 'M'].lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const $TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
  background-color: ${({ isFocused, theme }) => {
    return theme.colors.neutral.background[isFocused ? 'strong' : 'bold'];
  }};
  border: 1px solid ${({ isFocused, theme }) => (isFocused ? theme.colors.neutral.border.active : 'none')};
  border-radius: 16px;

  & label {
    transition: 200ms;
    color: ${({ theme }) => theme.colors.neutral.text.weak};
    ${labelFont}
  }

  & textarea {
    width: 100%;
    color: ${({ theme }) => theme.colors.neutral.text.strong};
    font-size: ${({ theme }) => theme.fontSize.M.fontSize};
    line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    border-bottom: 1px dashed ${({ theme }) => theme.colors.neutral.border.default};
    padding-bottom: 18px;
    resize: none;
  }

  &:focus-within label {
    color: ${({ theme }) => theme.colors.neutral.text.default};
    font-size: ${({ theme }) => theme.fontSize.S.fontSize};
    line-height: ${({ theme }) => theme.fontSize.S.lineHeight};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

export { $TextArea };
