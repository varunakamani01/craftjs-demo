import { useNode } from "@craftjs/core";

export const HtmlEmbed = ({ html }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

HtmlEmbed.craft = {
  displayName: "HtmlEmbed",
  props: {
    html: "<p>hello world</p>",
  },
  //   related: {
  //     toolbar: VideoSettings,
  //   },
};
