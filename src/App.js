// pages/index.js

import React from "react";
import { Typography, Paper, Grid } from "@mui/material";
import { Container } from "./components/Container";
import { Toolbox } from "./components/ToolBox";
import { Card, CardTop, CardBottom } from "./components/Card";
import { Button } from "./components/Button";
import { Editor, Element, Frame } from "@craftjs/core";
import { Text } from "./components/Text";
import { Image } from "./components/Image";

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor
        resolver={{ Card, Button, Text, Container, CardTop, CardBottom, Image }}
      >
        <Grid container spacing={3}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="outlined">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={6} background="#999" canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              {/* <SettingsPanel /> */}
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
