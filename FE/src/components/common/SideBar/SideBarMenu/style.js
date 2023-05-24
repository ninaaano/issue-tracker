import styled from 'styled-components';
import DropDown from '../../DropDown';

const $DropDown = styled(DropDown)`
  display: flex;
`;

const $SideBarMenu = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ isSelected }) => (isSelected ? '132px' : '96px')};
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
`;

export { $SideBarMenu, $DropDown };
