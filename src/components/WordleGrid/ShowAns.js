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
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
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
