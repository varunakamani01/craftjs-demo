import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const HtmlEmbedDialog = ({ open, onSubmit, onCancel }) => {
  const [inputHtml, setInputHtml] = useState("");

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Html Embed</DialogTitle>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={inputHtml}
        onChange={(e) => setInputHtml(e.target.value)}
        multiline
      />
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSubmit(inputHtml)}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
};
