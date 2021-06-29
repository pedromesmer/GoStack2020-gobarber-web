import React from 'react';
import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <h1>Usuário logado!</h1>
      <Button type="button" onClick={signOut}>
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
