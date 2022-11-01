import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        padding: "10px 15px ",
        borderRadius: "5px",
        border: "none",
        backgroundColor:"#006b6c",
        color: "#dafff6"
      }}
    >
      {children}
    </button>
  );
};


export default Button