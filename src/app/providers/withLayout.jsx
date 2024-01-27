import React from 'react';
import { Header } from 'widgets/header';

const withLayout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 h-full">
      {/* <Header toggleTheme={toggleTheme} /> */}
      {/* <Sidebar /> */}
      {cheldren}
      {/* <footer /> */}
    </div>
  );
};

export default withLayout;
