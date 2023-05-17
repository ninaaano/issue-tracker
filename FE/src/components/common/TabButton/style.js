import styled, { css } from 'styled-components';

import Button from '../Button';

const $TabButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 321px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 11px;
`;

const buttonStyle = css`
  width: 160px;
  height: 40px;
  background-color: ${({ active, theme }) => {
    return theme.colors.neutral.background[active ? 'bold' : 'default'];
  }};
`;

const $LeftButton = styled(Button)`
  ${buttonStyle}

  border-radius: 11px 0 0 11px;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const $RightButton = styled(Button)`
  ${buttonStyle}

  border-radius: 0 11px 11px 0;
`;

export { $TabButton, $LeftButton, $RightButton };
