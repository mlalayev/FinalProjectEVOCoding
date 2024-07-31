import React from 'react';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
