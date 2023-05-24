import styled, { css } from 'styled-components';

const labelFont = css`
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ hasValue, isFocused, theme }) => {
    return theme.fontSize[hasValue || isFocused ? 'S' : 'M'].fontSize;
  }};
  line-height: ${({ hasValue, isFocused, theme }) => {
    return theme.fontSize[hasValue || isFocused ? 'S' : 'M'].lineHeight;
  }};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const $Label = styled.label`
  transition: 200ms;
  ${labelFont}
`;

const $TextAreaInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding-bottom: 18px;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.neutral.border.default};

  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  resize: none;
`;

const $TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  height: ${({ heightType }) => {
    if (heightType === 'S') return '240px';
    if (heightType === 'L') return '436px';

    return '';
  }};
  padding: 16px;
  border: 1px solid ${({ isFocused, theme }) => (isFocused ? theme.colors.neutral.border.active : 'none')};
  border-radius: 16px;

  background-color: ${({ isFocused, theme }) => {
    return theme.colors.neutral.background[isFocused ? 'strong' : 'bold'];
  }};

  opacity: ${({ disabled }) => (disabled ? 0.32 : 1)};
`;

export { $TextArea, $Label, $TextAreaInput };
