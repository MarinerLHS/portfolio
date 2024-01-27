import { Routes } from 'pages/routes';
import React, { Suspense } from 'react';

export const app = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes />
    </Suspense>
  );
};

export default App;
