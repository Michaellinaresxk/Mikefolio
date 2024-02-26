// CallToAction.js


const CallToAction = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-4 py-12 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold tracking-tighter">Got a project?</h2>
        <div className="border-b-4 border-gray-700 w-10 mx-auto"></div>
      </div>
      <p className="text-lg font-light">Let's talk!</p>
      <button className="bg-gray-800 text-white font-medium rounded-full px-10 py-3 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition ease-in-out duration-300">
        Contact me
      </button>
    </div>
  );
};

export default CallToAction;
