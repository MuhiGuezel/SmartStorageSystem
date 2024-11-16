const DeviceCheck = async (deviceID) => {
  const validDeviceIDs = ["1234", "5678", "abcd"]; // Example valid IDs
  return validDeviceIDs.includes(deviceID);
};

export default DeviceCheck;
