import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import htp1 from "../../assets/howtoplay-1.png";
import htp2 from "../../assets/howtoplay-2.png";
import htp3 from "../../assets/howtoplay-3.png";
import { Divider } from "@mui/material";

const RulesModal = (props) => {
  const [open, setOpen] = useState(false);
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
      <Typography variant="span" component="div" sx={{ flexGrow: 1 }}>
        <IconButton onClick={handleOpen}>
          <HelpRoundedIcon />
        </IconButton>
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            color="primary.dark"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            How to Play?
          </Typography>
          <Typography
            variant="p"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Guess the <strong>WORDLE</strong> in six tries.{" "}
          </Typography>
          <Typography
            variant="p"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Each guess must be a valid five-letter word.{" "}
          </Typography>
          <Typography
            variant="p"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Hit the enter button to submit.{" "}
          </Typography>
          <Typography
            variant="p"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </Typography>
          <Divider sx={{ my: "1em" }} />
          <Typography
            variant="p"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <strong>Examples </strong>
            <br />
            <img src={htp1} alt="#" />
            <br />
            The letter <strong>W</strong> is in the word and in the correct
            spot.
            <br />
            <img src={htp2} alt="#" />
            <br />
            The letter <strong>I</strong> is in the word but in the wrong spot.
            <br />
            <img src={htp3} alt="#" />
            <br />
            The letter <strong>U</strong> is not in the word in any spot.
            <br />
          </Typography>
          <Divider sx={{ my: "1em" }} />
          <Typography
            variant="p"
            component="p"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <strong>A new WORDLE will be available each day!</strong>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default RulesModal;
