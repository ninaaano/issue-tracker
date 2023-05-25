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
  display: flex;
  flex-direction: column;
`;

export { $IssueDetail, $IssueCommentArea, $IssueDetailMain };
