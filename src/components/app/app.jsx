import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    errorsCount
  } = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
    />
  );
};

export default App;
