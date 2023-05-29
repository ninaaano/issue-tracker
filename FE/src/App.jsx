import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { USERS } from './constants/api';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './context/themeContext';
import useFetch from './hooks/useFetch';

import Header from './components/Header';

import IssueList from './pages/IssueList';
import NewIssue from './pages/NewIssue';
import IssueDetail from './pages/IssueDetail';
import Milestone from './pages/Milestone';
import LabelList from './pages/LabelList';

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  return (
    <ThemeProvider>
      <GlobalStyles />
      {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
      <BrowserRouter basename="/issues">
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<IssueList />} />

          {userImgData && <Route path="/new" element={<NewIssue userImgSrc={userImgData.userImgURL} />} />}
          <Route path="/:issueId" element={<IssueDetail />} />
          <Route path="/milestones" element={<Milestone />} />
          <Route path="/labels" element={<LabelList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
