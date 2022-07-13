import React from 'react';
import Topbar from './Topbar';
import Titlebar from "./Titlebar";
import Navbar from "./Navbar/Navbar";
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