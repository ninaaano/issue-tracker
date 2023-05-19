import styled from 'styled-components';
import DropDown from '../../../common/DropDown';

const $CheckBox = styled.button``;

const $LeftButton = styled.div`
  display: flex;
  align-items: center;

  & > button:not(:last-child) {
    margin-right: 24px;
  }

  & > button:first-child {
    margin-right: 32px;
  }
`;

const $RightButton = styled.div`
  position: relative;
  display: flex;
  align-content: center;

  /* & > button:not(:last-child) {
    margin-right: 36px;
  } */
  & > button {
    margin-left: 36px;
  }
`;

const $DropDown = styled(DropDown)`
  position: absolute;
  top: calc(100% + 8px);
`;

const $IssueListMainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  padding: 0px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { $IssueListMainHeader, $CheckBox, $LeftButton, $RightButton, $DropDown };
