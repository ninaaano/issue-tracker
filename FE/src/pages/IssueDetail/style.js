import styled from 'styled-components';

const $IssueDetail = styled.section`
  display: flex;
  flex-direction: column;
`;
const $IssueCommentArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  width: 958px;

  & > button {
    margin-top: 24px;
  }
`;

<<<<<<< HEAD
const $IssueDetailMain = styled.div`
=======
const $IssueDetailMainLayout = styled.div`
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

<<<<<<< HEAD
export { $IssueDetail, $IssueCommentArea, $IssueDetailMain };
=======
export { $IssueDetail, $IssueCommentArea, $IssueDetailMainLayout };
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
