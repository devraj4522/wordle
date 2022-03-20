import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const WrongKeyModal = (props) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #f6f7f8",
    boxShadow: "0 4px 23px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    animation: "SlideIn 200ms",
    maxWidth: "75vw",
    maxHeight: "75vh",
    overflow: "auto",
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          props.setisvalidWord(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Incorrect Word!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is not a valid word.
            <br />
            Please Enter Correct Word.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default WrongKeyModal;
