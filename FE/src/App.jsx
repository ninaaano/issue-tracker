import React, { useEffect, useState, useCallback } from 'react';
// import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { USERS } from './constants/api';
import IssueList from './pages/IssueList';
import { ThemeProvider } from './context/themeProvider';
import useFetch from './hooks/useFetch';

const App = () => {
  const { data: userImgData } = useFetch(USERS.GET_USER_IMG(6));

  return (
    <ThemeProvider>
      <GlobalStyles />
      {userImgData && <Header userImgSrc={userImgData.userImgURL} />}
      <IssueList />
    </ThemeProvider>
  );
};

export default App;
