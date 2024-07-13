import React, {ReactNode} from 'react';
import {useLocation} from "react-router";
import Header from "../LayoutComponents/Header/Header.tsx"

type LayoutChildren = {
  children: ReactNode,
}

const Layout: React.FC<LayoutChildren> = ({children}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/'
  return (
    <>
      {!isHomePage && <Header/>}
      <main>
        {children}
      </main>

    </>
  );
}

export default Layout;


//Здесь я использую useLocation чтобы Header Layout не отображался на главной странице
