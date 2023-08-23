// components/Toolbox.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
  TextField,
} from "@mui/material";
import { Element, ROOT_NODE, useEditor } from "@craftjs/core";
import { Button } from "./Button";
import { Text } from "./Text";
import { Container } from "./Container";
import { Card } from "./Card";
import { Image } from "./Image";
import { Divider } from "./Divider";
import { HtmlEmbed } from "./HtmlEmbed";

export const Toolbox = () => {
  const { connectors, query, actions } = useEditor();
  const [inputHtml, setInputHtml] = useState(``);

  const [showHtmlEmbed, setHtmlEmbed] = React.useState(false);

  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(ref, <Button text="Click me" size="small" />)
            }
            variant="contained"
          >
            Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            variant="contained"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) =>
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
            }
            variant="contained"
          >
            Container
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Card />)}
            variant="contained"
          >
            Card
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Image />)}
            variant="contained"
          >
            Image
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref) => connectors.create(ref, <Divider />)}
            variant="contained"
          >
            Divider
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            // ref={(ref) => connectors.create(ref, <Divider />)}
            onClick={() => setHtmlEmbed(true)}
            variant="contained"
          >
            Html Embed
          </MaterialButton>
          <Box pt={2} />
          <TextField
            id="outlined-basic"
            // disabled={!showHtmlEmbed}
            label="HTML"
            variant="outlined"
            value={inputHtml}
            onChange={(e) => setInputHtml(e.target.value)}
            multiline
          />
          <MaterialButton
            onClick={() => {
              const nodeID = Math.random().toString();
              const freshNode = {
                id: nodeID,
                data: {
                  type: HtmlEmbed,
                  props: {
                    html: inputHtml,
                  },
                },
              };
              const nodeToAdd = query.parseFreshNode(freshNode).toNode();
              actions.add(nodeToAdd, ROOT_NODE);
            }}
            variant="contained"
          >
            Submit
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
