import { useNode } from "@craftjs/core";

export const Image = ({ url }) => {
  const {
    connectors: { connect, drag },
    setProp,
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      {url ? (
        <img src={url} alt="img" />
      ) : (
        <input
          type="file"
          className="placeholder"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setProp(
                (props) => (props.url = URL.createObjectURL(e.target.files[0]))
              );
            }
          }}
        />
      )}
    </div>
  );
};

Image.craft = {
  displayName: "Image",
  props: {
    url: undefined,
  },
  //   related: {
  //     toolbar: VideoSettings,
  //   },
};
