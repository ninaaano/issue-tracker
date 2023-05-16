import styled, { css } from 'styled-components';

// type(container, outline, ghost): color, background-color, border
const containerStyle = css`
  background-color: ${({ theme }) => theme.colors.accent.background.default};
  color: ${({ theme }) => theme.colors.accent.text.default};
`;

const outlineStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.accent.border.weak};
  color: ${({ theme }) => theme.colors.accent.text.weak};
`;

const ghostStyle = css`
  background-color: ${({ $active, theme }) => ($active ? theme.colors.neutral.background.bold : '')};
  color: ${({ $active, theme }) => {
    return $active ? theme.colors.neutral.text.strong : theme.colors.neutral.text.default;
  }};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const typeStyle = css`
  ${({ type }) => {
    if (type === 'container') return containerStyle;
    if (type === 'outline') return outlineStyle;
    if (type === 'ghost') return ghostStyle;

    return '';
  }}
`;

// size(S, M, L): width, height, padding, border-radius 결정
const LStyle = css`
  width: 240px;
  height: 56px;
  padding: 0px ${({ type }) => (type === 'ghost' ? '24px' : '0px')};
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
