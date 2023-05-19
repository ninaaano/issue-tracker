import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ISSUES } from '../../constants/api';

import IssueListHeader from '../../components/IssueList/IssueListHeader';
import IssueListMain from '../../components/IssueList/IssueListMain';
import { $IssueList, $IssueListMain } from './style';

const IssueList = () => {
  const [issueData, setIssueData] = useState([]);

  const fetchIssueListsData = useCallback(async () => {
    try {
      const response = await fetch(ISSUES.GET_ALL_ISSUES);

      if (!response.ok) {
        throw new Error('fetch failed');
      }

      const { data } = await response.json();

      setIssueData(data.issues);
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    fetchIssueListsData();
  }, []);

  return (
    <$IssueList>
      <IssueListHeader />
      <$IssueListMain>{issueData.length !== 0 && <IssueListMain issues={issueData} />}</$IssueListMain>
    </$IssueList>
  );
};

export default IssueList;
