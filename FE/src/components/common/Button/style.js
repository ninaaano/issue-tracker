import styled, { css } from 'styled-components';

// * size(S, M, L): width, height, padding, border-radius 결정
// ! type !== ghost 경우에만 적용
const LStyle = css`
  width: 240px;
  height: 56px;
  border-radius: 16px;
  padding: 0px 24px;
`;

const MStyle = css`
  width: 85px;
  height: 32px;
`;

const SStyle = css`
  width: 120px;
  height: 40px;
  border-radius: 11px;
  padding: 0px 16px;
`;

const sizeStyle = css`
  ${({ size }) => {
    if (size === 'L') return LStyle;
    if (size === 'M') return MStyle;
    if (size === 'S') return SStyle;

    return '';
  }}
`;

// * type(container, outline, ghost): color, background-color, border
const containerStyle = css`
  background-color: ${({ theme }) => theme.colors.accent.background.default};
  color: ${({ theme }) => theme.colors.accent.text.default};
`;

const outlineStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.accent.border.weak};
  color: ${({ theme }) => theme.colors.accent.text.weak};
`;

const ghostStyle = css`
  color: ${({ $active, theme }) => {
    return $active ? theme.colors.neutral.text.strong : theme.colors.neutral.text.default;
  }};
`;

const typeStyle = css`
  ${({ type }) => {
    if (type === 'contained') return containerStyle;
    if (type === 'outline') return outlineStyle;
    if (type === 'ghost') return ghostStyle;

    return '';
  }}
`;

const $Button = styled.button`
  ${({ type }) => type !== 'ghost' && sizeStyle}
  ${typeStyle}

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
