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
<<<<<<< HEAD
=======
import LabelList from './pages/LabelList';
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  return (
    <ThemeProvider>
      <GlobalStyles />
      {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
<<<<<<< HEAD
      <BrowserRouter>
=======
      <BrowserRouter basename="/">
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<Navigate to="/issues" />} />
          <Route path="/issues" element={<IssueList />} />
          {userImgData && (
            <Route path="/issues/new" element={<NewIssue userImgSrc={userImgData.userImgURL} />} />
          )}
          <Route path="/issues/:issueId" element={<IssueDetail />} />
<<<<<<< HEAD
          <Route path="/issues/labels" />
          <Route path="/issues/milestones" element={<Milestone />} />
=======
          <Route path="/issues/milestones" element={<Milestone />} />
          <Route path="/issues/labels" element={<LabelList />} />
>>>>>>> parent of 54c88ca (remove: FE, iOS 파일 삭제)
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
