import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-purple-800 text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome</h1>
      <p className="text-lg md:text-xl max-w-lg">
        At Smart Storage Systems, we specialize in providing innovative solutions for all your storage needs.
        Organize your life with ease and efficiency!
      </p>
      <a href="login.html">
        <button className="mt-6 bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-3 text-lg rounded-lg shadow hover:shadow-lg hover:opacity-90 transition duration-300">
          Connect Your Device
        </button>
      </a>
    </section>
  );
};

export default WelcomeSection;
