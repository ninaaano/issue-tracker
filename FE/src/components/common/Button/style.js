import styled, { css } from 'styled-components';

const containerStyle = css`
  background-color: ${({ theme }) => theme.accent.background.default};
  color: ${({ theme }) => theme.accent.text.default};
`;

const outlineStyle = css`
  border: 1px solid ${({ theme }) => theme.accent.border.weak};
  color: ${({ theme }) => theme.accent.text.weak};
`;

const ghostStyle = css`
  color: ${({ theme }) => theme.neutral.text.default};
`;

const tabStyle = css`
  ${ghostStyle}
  background-color: ${({ type, theme }) => (type === 'active' ? theme.neutral.background.bold : '')};
  border: 1px solid ${({ theme }) => theme.neutral.border.default};
`;

const typeStyle = css`
  ${({ type }) => {
    if (type === 'container') return containerStyle;
    if (type === 'outline') return outlineStyle;
    if (type === 'ghost') return ghostStyle;

    return '';
  }}
`;

const activeStyle = css`
  color: ${({ type, isActive, theme }) => {
    return type === 'ghost' && isActive ? theme.neutral.text.strong : theme.neutral.text.default;
  }};
`;

const LStyle = css`
  width: 240px;
  height: 56px;
  padding: 0px 24px;
  border-radius: 16px;
`;

const MStyle = css`
  width: ${({ type }) => (type === 'ghost' ? '85px' : '')};
  height: ${({ type }) => (type === 'ghost' ? '32px' : '')};
`;

const SStyle = css`
  width: ${({ type }) => (type === 'ghost' ? '69px' : '120px')};
  height: ${({ type }) => (type === 'ghost' ? '32px' : '40px')};
  padding: 0px ${({ type }) => (type === 'ghost' ? '0px' : '16px')};
  border-radius: ${({ type }) => (type === 'ghost' ? '0' : '11px')};
`;

const sizeStyle = css`
  ${({ size }) => {
    if (size === 'L') return LStyle;
    if (size === 'M') return MStyle;
    if (size === 'S') return SStyle;

    return '';
  }}
`;

const $Button = styled.button`
  ${typeStyle}
  ${sizeStyle}
  ${activeStyle}
  ${({ isTab }) => isTab && tabStyle}

  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.64;
  }

  &:disabled {
    outline: none;
    opacity: 0.32;
  }

  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    cursor: not-allowed;
  }
`;

export { $Button };
