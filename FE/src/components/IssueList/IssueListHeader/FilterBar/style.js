import styled from 'styled-components';
import DropDown from '../../../common/DropDown';

const $FilterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 24px;
  width: 128px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 11px 0px 0px 11px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  color: ${({ theme }) => theme.colors.neutral.text.weak};

  // TODO: 상태에 따라 배경색 바꾸기.
  background-color: ${({ theme }) => theme.colors.neutral.background.default};

  & > svg {
    margin-left: 8px;
  }
`;

const $FilterInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 24px;
  width: 472px;
  height: 100%;
  border-radius: 0px 11px 11px 0px;

  // TODO: 상태에 따라 배경색 바꾸기.
  background-color: ${({ theme }) => theme.colors.neutral.background.bold};

  & > svg {
    margin-right: 8px;
  }
`;

const $FilterInput = styled.input`
  width: 400px;
  height: 28px;
  vertical-align: middle;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
`;

const $DropDown = styled(DropDown)`
  position: absolute;
  top: calc(100% + 8px);
`;

const $FilterBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 601px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 11px;
`;

export { $FilterBar, $FilterButton, $FilterInputWrapper, $FilterInput, $DropDown };
