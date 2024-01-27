import React from 'react';

const ConnectProviders = ({ children }) => {
  return (
    <WithProvider>
      <WithLayout>{children}</WithLayout>
    </WithProvider>
  );
};

export default ConnectProviders;
