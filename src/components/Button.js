// components/user/Button.js
import React from "react";
import { Button as MaterialButton } from "@mui/material";
import { useNode } from "@craftjs/core";

export const Button = ({ text, size, variant, color, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <MaterialButton
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
      title={text}
    >
      {text}
    </MaterialButton>
  );
};
