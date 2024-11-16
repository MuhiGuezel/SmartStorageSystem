import React, { useState } from "react";
import DeviceCheck from "./DeviceCheck";

const DeviceForm = () => {
  const [deviceID, setDeviceID] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await DeviceCheck(deviceID);
    setMessage(result ? "Device connected successfully!" : "Device ID not found.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Device ID"
        className="border border-gray-300 rounded p-2 w-full mb-4"
        value={deviceID}
        onChange={(e) => setDeviceID(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
      >
        Connect
      </button>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </form>
  );
};

export default DeviceForm;
