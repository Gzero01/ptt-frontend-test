import React from "react";

const Input = ({ value, onChange, placeholder, type, name, id, width }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`rounded-lg border border-gray-400 px-3 py-2 text-black ${
        width ? width : "sm:w-[250px] w-[200px]"
      } focus:outline-none hover:border-blue-400`}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default Input;
