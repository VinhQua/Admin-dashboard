import React from "react";

const Button = ({ icon, color, bgColor, text, size, borderRadius, width }) => {
  return (
    <button
      type="button"
      style={{ borderRadius }}
      className={`text-${size} text-${color} bg-${bgColor} p-3 w-${width} hover:drop-shadow-xl btn`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
