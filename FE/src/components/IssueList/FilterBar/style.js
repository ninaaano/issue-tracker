import styled from 'styled-components';

const $FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 601px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.active};
  border-radius: 11px;
  margin-top: 59px;
`;

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

  & > img {
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
  background-color: ${({ theme }) => theme.colors.neutral.background.bold};
  & > img {
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

export { $FilterBar, $FilterButton, $FilterInputWrapper, $FilterInput };
