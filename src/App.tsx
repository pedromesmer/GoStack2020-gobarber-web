import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Pedro' }}>
      {/* <SignUp /> */}
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;
