import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { USERS } from './constants/api';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from './context/themeProvider';
import useFetch from './hooks/useFetch';

import Header from './components/Header';
import IssueList from './pages/IssueList';
import DetailIssue from './pages/DetailIssue';

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  return (
    <ThemeProvider>
      <GlobalStyles />
      {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
      <BrowserRouter>
        <Routes>
          <Route path="/login" />
          <Route path="/" element={<IssueList />} />
          <Route path="/new" />
          <Route path="/detail/:issueId" element={<DetailIssue />} />
          <Route path="/labels" />
          <Route path="/milestones" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
