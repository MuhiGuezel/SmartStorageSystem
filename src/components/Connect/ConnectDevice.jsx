const ConnectDevice = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-6">Connect A Device</h1>
        <p>Debug: Connect Device Page Loaded</p> {/* Debug line */}
        <DeviceForm />
      </div>
    </div>
  );
};
export default ConnectDevice;


