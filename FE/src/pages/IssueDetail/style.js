import styled from 'styled-components';

const $IssueDetail = styled.section`
  display: flex;
  flex-direction: column;
`;
const $IssueDetailMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const $IssueCommentArea = styled.div`
  width: 958px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > button {
    margin-top: 24px;
  }
`;

export { $IssueDetail, $IssueCommentArea, $IssueDetailMain };
