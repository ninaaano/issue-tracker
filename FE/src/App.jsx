import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header userImgSrc="./assets/userImg.svg" userName="@frog" />
    </React.Fragment>
  );
};

export default App;
