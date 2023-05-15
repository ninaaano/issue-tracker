import React, { useEffect, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { USERS } from './constants/api';
import theme from './styles/theme';

const App = () => {
  const [userData, setUserData] = useState({
    userImgSrc: '',
    userName: '',
  });

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(USERS.GET_USER_IMG(6));

      if (!response.ok) {
        throw new Error('fetch failed');
      }

      const { data } = await response.json();

      setUserData((prev) => {
        return { ...prev, userImgSrc: data.userImgURL, userName: data.userName };
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header userImgSrc={userData.userImgSrc} userName={userData.userName} />
    </ThemeProvider>
  );
};

export default App;
