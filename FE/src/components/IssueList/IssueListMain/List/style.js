import styled from 'styled-components';

import Icon from '../../../common/Icon';

const $LeftElements = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const $UpElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50%;
`;

const $CheckBox = styled.button`
  margin-left: 32px;
  margin-right: 32px;
`;

const $IssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.L.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  & > svg {
    margin-right: 8px;
  }
  & > span {
    margin-right: 8px;
  }
`;

const $IssueInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 80px;
  height: 50%;
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  & > span {
    margin-right: 16px;
  }
  & > svg {
    margin-right: 8px;
  }
`;

const $Assignee = styled.img`
  margin-right: 54px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const $List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  // TODO: Remove
  background-color: #fefefe;
`;

export { $List, $LeftElements, $UpElements, $IssueTitle, $IssueInfo, $Assignee, $CheckBox };
