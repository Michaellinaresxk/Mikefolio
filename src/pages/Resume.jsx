

const Resume = () => {
  return (
    <div className="bg-white p-8">
    {/* Personal Information */}
    <div className="mb-6">
      <h1 className="text-4xl font-bold mb-2">Michael Linares</h1>
      <p className="text-lg text-gray-700">Frontend Developer</p>
    </div>
    
    {/* Experience Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {/* List each job as an article or div */}
      <article className="mb-4">
        <h3 className="text-xl font-semibold">Company Name - Job Title</h3>
        <p className="text-md text-gray-600">Month Year - Month Year</p>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Responsibility or achievement</li>
          {/* Repeat for each responsibility */}
        </ul>
      </article>
      {/* Repeat for each job */}
    </div>
    
    {/* Education Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <p className="text-xl font-semibold">University Name - Degree</p>
      <p className="text-md text-gray-600">Month Year - Month Year</p>
      {/* Repeat for each educational qualification */}
    </div>
    
    {/* Skills Section */}
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <span className="bg-gray-200 rounded-full px-4 py-1 text-sm font-medium text-gray-700">HTML</span>
        {/* Repeat for each skill */}
      </div>
    </div>
    
    {/* Contact Information */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Email: email@example.com</p>
      <p>Phone: (123) 456-7890</p>
      {/* Include any other contact information */}
    </div>
  </div>
  );
};

export default Resume;
