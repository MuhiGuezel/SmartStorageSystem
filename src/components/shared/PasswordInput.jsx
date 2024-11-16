import React, { useState } from 'react';

const PasswordInput = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'super') {
      onSuccess(); // Notify App.js of successful authentication
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="h-screen bg-purple-700 flex items-center justify-center text-white">
      <div className="bg-white text-purple-700 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-purple-700 px-4 py-2 rounded focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordInput;
