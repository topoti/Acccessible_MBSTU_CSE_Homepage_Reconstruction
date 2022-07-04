import React from 'react';
import Topbar from './Topbar';
import Titlebar from "./Titlebar";
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <header>
      <Topbar />
      <Titlebar />
      <Navbar />
      <Banner/>
    </header>
  );
};

export default Header;