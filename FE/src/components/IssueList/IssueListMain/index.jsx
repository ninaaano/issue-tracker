import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useFilterStateContext, useFilterDispatchContext } from '../../../context/filterContext';
import { useCheckBoxContext } from '../../../context/checkBoxContext';
import { FILTER_ACTION_TYPES } from '../../../context/filterReducer';

import { isEqualObj } from '../../../utils/isEqualObj';
import { filterIssues } from '../../../utils';

import Icon from '../../common/Icon';
import IssueListItem from './IssueListItem';
import IssueListMainHeader from './IssueListMainHeader';
import { $IssueList, $NoResultMessage, $IssueListMain, $InitFilterButton } from './style';

const IssueListMain = ({ issues, user, label, milestone }) => {
  const { filterState, isFilterChanged } = useFilterStateContext();
  const filterDispatch = useFilterDispatchContext();
  const { resetCheckList } = useCheckBoxContext();
  const [isOpened, setIsOpened] = useState(true);
  const prevFilterState = useRef(filterState);

  const filteredOpenIssues = filterIssues({ type: 'open', issues, filterOptions: filterState });
  const filteredCloseIssues = filterIssues({ type: 'close', issues, filterOptions: filterState });
  const filteredIssues = isOpened ? filteredOpenIssues : filteredCloseIssues;

  useEffect(() => {
    // TODO : filter 적용된 상태를 의존성 배열로 넣어서 resetCheckList 해보기.
    if (!isEqualObj(prevFilterState, filterState)) resetCheckList();
  }, [isOpened, isFilterChanged, filterState]);

  const resetFilterOptions = () => {
    filterDispatch({ type: FILTER_ACTION_TYPES.RESET_FILTER });
  };

  const noResultMessage = <$NoResultMessage>검색과 일치하는 결과가 없습니다.</$NoResultMessage>;

  return (
    <React.Fragment>
      {isFilterChanged && (
        <$InitFilterButton type="ghost" size="S" onClick={resetFilterOptions}>
          <Icon name="xSquare" />
          현재의 검색 필터 및 정렬 지우기
        </$InitFilterButton>
      )}
      <$IssueListMain>
        <IssueListMainHeader
          openCount={filteredOpenIssues.length}
          closeCount={filteredCloseIssues.length}
          user={user}
          label={label}
          milestone={milestone}
          openBtnHandler={() => setIsOpened(true)}
          closeBtnHandler={() => setIsOpened(false)}
          isOpened={isOpened}
          filteredIssuesIds={filteredIssues.map((issue) => issue.issueId)}
        />
        <$IssueList>
          {filteredIssues.length === 0 && noResultMessage}
          {filteredIssues.map((issue) => (
            <IssueListItem isOpened={isOpened} key={issue.issueId} {...issue} />
          ))}
        </$IssueList>
      </$IssueListMain>
    </React.Fragment>
  );
};

IssueListMain.propTypes = {
  issues: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  milestone: PropTypes.array.isRequired,
};

export default IssueListMain;
