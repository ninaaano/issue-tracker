import React, { useEffect, useState, useCallback } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { USERS } from './constants/api';

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
    <React.Fragment>
      <GlobalStyles />
      <Header userImgSrc={userData.userImgSrc} userName={userData.userName} />
    </React.Fragment>
  );
};

export default App;
