import styled from 'styled-components';

const $Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 27px 0;

  & > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export { $Header };
