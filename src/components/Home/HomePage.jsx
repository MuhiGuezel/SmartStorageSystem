import React from 'react';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';

const HomePage = () => {
  return (
    <main className="h-screen grid grid-rows-2 bg-purple-700 text-white">
      {/* Hero Section (Top Half) */}
      <HeroSection />
      {/* Welcome Section (Bottom Half) */}
      <WelcomeSection />
    </main>
  );
};

export default HomePage;
