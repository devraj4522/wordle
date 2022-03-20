import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";

const ShowAns = (props) => {
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
    overflow: "scroll",
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          props.setshowAns(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Right Answer is:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.rightAnswer}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ShowAns;
