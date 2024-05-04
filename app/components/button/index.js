

const Button = ({ content, onClick }) => {
  // Accept onClick prop

  return (
    <div
      
      className="flex items-center justify-center my-5"
      onClick={onClick}
    >
      {" "}
      {/* Attach onClick event handler */}
      <div className="w-fit bg-visionBlue p-2 sm:p-5 text-white flex cursor-pointer rounded-lg tracking-wide items-center justify-center font-bold">
        {content}
      </div>
    </div>
  );
};

export default Button;


