import React from "react";

const Button = (
  text = "",
  type = "primary",
  onClick = () => {},
  style = {},
  className = ""
) => {
  return (
    <Button
      className={`btn btn-${type} ${className} style={style} onClick={onClick}`}
    >
      {text}
    </Button>
  );
};

export default Button;
