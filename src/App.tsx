import React from 'react';
import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';
import ToastContainer from './pages/ToastContainer';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);
export default App;
