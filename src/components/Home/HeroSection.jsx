import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-purple-600 text-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Efficiency in Storage
      </h1>
      <h2 className="text-3xl md:text-4xl font-medium mt-4">
        Digitized for Success
      </h2>
      <p className="mt-6 text-lg md:text-xl max-w-xl">
        Transform the way you manage your storage with smart and seamless solutions.
      </p>
    </section>
  );
};

export default HeroSection;
