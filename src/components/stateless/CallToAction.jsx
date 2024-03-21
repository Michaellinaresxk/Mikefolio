import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center px-4 py-12 md:py-24">
    <div className="max-w-1xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10">
      <div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Got a project?</h2>
        <p className="text-xl md:text-3xl font-light mt-4 md:mt-6">____________________________________   Let's talk! </p>
      </div>
      <Link to={`/contact`}> 
      <button className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-full px-8 py-4 md:px-12 md:py-6 hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50 transition ease-in-out duration-300 text-lg md:text-xl shadow-lg">
        Contact me!
      </button>
      </Link>
    </div>
  </div>
  );
};

export default CallToAction;
