export const WebCards = ({ title, imageUrl }) => {
  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105`}
      style={{ width: "450px" }}
    >
      <div className="relative">
        <img
          className="w-full h-50 object-cover"
          src={imageUrl}
          alt={`Project titled ${title}`}
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      </div>
    </div>
  );
};
