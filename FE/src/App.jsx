import React, { useEffect, useState } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import { USERS } from './constants/api';

const App = () => {
  const [userData, setUserData] = useState({
    userImgSrc: '',
    userName: '',
  });
  useEffect(() => {
    fetch(USERS.GET_USER_IMG(6))
      .then((response) => response.json())
      .then((data) => {
        console.log(data.userName);
        setUserData((prev) => {
          return { ...prev, userImgSrc: data.data.userImgURL, userName: data.data.userName };
        });
      });
  }, []);
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header userImgSrc={userData.userImgSrc} userName={userData.userName} />
    </React.Fragment>
  );
};

export default App;
