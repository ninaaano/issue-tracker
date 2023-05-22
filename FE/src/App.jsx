import React, { useEffect, useState, useCallback } from 'react';
// import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { USERS } from './constants/api';
import IssueList from './pages/IssueList';
import { ThemeProvider } from './context/themeProvider';

const App = () => {
  const [userData, setUserData] = useState({
    userImgSrc: '',
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(USERS.GET_USER_IMG(6));

      if (!response.ok) {
        throw new Error('fetch failed');
      }

      const { data } = await response.json();

      setUserData((prev) => {
        return { ...prev, userImgSrc: data.userImgURL };
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header userImgSrc={userData.userImgSrc} />
      <IssueList />
    </ThemeProvider>
  );
};

export default App;
