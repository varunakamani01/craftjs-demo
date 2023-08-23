// components/user/Text.js
import { useNode } from "@craftjs/core";
import React from "react";

export const Text = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <p>{text}</p>
    </div>
  );
};
