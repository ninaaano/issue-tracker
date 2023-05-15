import styled from 'styled-components';

const $TabButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 321px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 11px;
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  color: ${({ theme }) => theme.colors.neutral.text.default};
  & svg {
    margin-right: 4px;
  }
`;

const $TabRightButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  // TODO: 상태에 따라 배경색 바꾸기
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

const $TabLeftButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  // TODO: 상태에 따라 배경색 바꾸기
  background-color: ${({ theme }) => theme.colors.neutral.background.default};
  height: 100%;
`;

export { $TabButtonWrapper, $TabRightButton, $TabLeftButton };
