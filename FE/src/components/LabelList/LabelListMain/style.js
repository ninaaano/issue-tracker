import styled from 'styled-components';

const $LabelCount = styled.div`
  display: flex;
  align-items: center;

  height: 64px;
  padding: 0 32px;
  border-radius: 16px 16px 0 0;

  background-color: ${({ theme }) => theme.colors.neutral.background.default};

  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSize.M.fontSize};
  line-height: ${({ theme }) => theme.fontSize.M.lineHeight};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const $LabelListMain = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.default};
  border-radius: 16px;
`;

export { $LabelListMain, $LabelCount };
