import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  close: () => void;
  month: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalAddInformation: React.FC<ModalProps> = (props: ModalProps) => {
  const { open, close, month } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add information to this {month}
          </Typography>

          <TextField
            id="outlined-basic"
            label="Brand"
            variant="outlined"
            style={{ margin: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Model"
            variant="outlined"
            style={{ margin: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            style={{ margin: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Color"
            variant="outlined"
            style={{ margin: "10px" }}
          />
          <TextField
            id="outlined-basic"
            label="Sold"
            variant="outlined"
            style={{ margin: "10px" }}
          />

          <div style={{ right: '20px'}}>
            <Button variant="contained" onClick={() => console.log("testing")}>
              Add Sale
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddInformation;
