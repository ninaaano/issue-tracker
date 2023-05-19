import styled from 'styled-components';

const $DropDownWrapper = styled.section`
  display: flex;
  width: 240px;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
  overflow: hidden;
`;

const $DropDownHeader = styled.header`
  width: 100%;
  height: 36px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  background-color: ${({ theme }) => theme.colors.neutral.background.bold};
  color: ${({ theme }) => theme.colors.neutral.text.strong};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.S.fontSize};
`;

const $DropDownMenus = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { $DropDownWrapper, $DropDownHeader, $DropDownMenus };
