// components/user/Button.js
import React from "react";
import { Button as MaterialButton } from "@mui/material";
import { useNode } from "@craftjs/core";
import { ButtonSettings } from "./ButtonSettings";

export const Button = ({ text, size, variant, color }) => {
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

export const ButtonDefaultProps = {
  size: "small",
  variant: "contained",
  color: "primary",
  text: "Click me",
};

Button.craft = {
  props: ButtonDefaultProps,
  related: {
    settings: ButtonSettings,
  },
};
