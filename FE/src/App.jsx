import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { USERS } from './constants/api';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './context/themeProvider';
import useFetch from './hooks/useFetch';

import Header from './components/Header';

import IssueList from './pages/IssueList';
import DetailIssue from './pages/DetailIssue';
import NewIssue from './pages/NewIssue';
import IssueDetail from './pages/IssueDetail';

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  return (
    <ThemeProvider>
      <GlobalStyles />
      {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
      <BrowserRouter>
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<Navigate to="/issues" />} />
          <Route path="/issues" element={<IssueList />} />
          {userImgData && <Route path="/issues/new" element={<NewIssue userImgSrc={userImgData.userImgURL} />} />}
          <Route path="/issues/:issueId" element={<IssueDetail />} />
          <Route path="/issues/labels" />
          <Route path="/issues/milestones" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
