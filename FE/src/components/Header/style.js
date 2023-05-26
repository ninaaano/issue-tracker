import styled from 'styled-components';

const $RightElements = styled.div`
  display: flex;
  & > img {
    margin-left: 15px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

const $Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 27px 0;
  margin-bottom: 19px;

  & > a > svg {
    fill: ${({ theme }) => theme.colors.neutral.text.default};
  }
`;

export { $Header, $RightElements };
