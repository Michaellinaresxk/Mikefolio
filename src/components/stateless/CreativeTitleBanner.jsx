const CreativeTitleBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter">
        <span className="block">
          <span className="animate-slide-in-left inline-block ml-[-25%] md:ml-[-30%]">
            Creative
          </span>
        </span>
        <span className="block">Frontend</span>
        <span className="block">
          <span className="animate-slide-in-right inline-block ml-[25%] md:ml-[30%]">
            Developer
          </span>
        </span>
      </h1>
    </div>
  );
};
export default CreativeTitleBanner;
