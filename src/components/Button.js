import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button type="submit" className="bg-blue-600 text-white font-bold px-3 py-2 w-[120px] rounded-lg" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
