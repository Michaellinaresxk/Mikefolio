// Timeline Component
import { timeline_background } from "../../assets/img/index";
export const Timeline = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="relative">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <TimelineItem />
          <TimelineItem />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="h-screen bg-cover bg-right"></div>
      </div>
    </div>
  );
};

// TimelineItem Component
const TimelineItem = () => {
  return (
    <div className="ml-4 mb-8">
      <div className="absolute w-3 h-3 bg-blue-500 rounded-full left-0.5 -translate-x-1/2"></div>
      {/* Your content here */}
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Content like date, title, description */}
      </div>
    </div>
  );
};
