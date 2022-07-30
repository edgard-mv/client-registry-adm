import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContainer from './MainContainer/MainContainer';

const Layout: React.FC<{}> = () => {
  return (
    <>
      <header></header>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
};

export default Layout;
