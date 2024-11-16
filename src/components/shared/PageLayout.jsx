import React from 'react';

const PageLayout = ({ title, children }) => {
  return (
    <main className="h-screen bg-purple-700 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center w-full mt-5">{title}</h1>
      <div className="w-full max-w-5xl">{children}</div>
    </main>
  );
};

export default PageLayout;
