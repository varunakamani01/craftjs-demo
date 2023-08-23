import { useNode } from "@craftjs/core";

export const Divider = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <hr ref={(ref) => connect(drag(ref))} />;
};
