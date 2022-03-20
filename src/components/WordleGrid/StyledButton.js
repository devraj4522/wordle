import React from "react";
import Button from "@mui/material/Button";
import { useStyles } from "./style";
import { IconButton } from "@mui/material";

const StyledButton = (props) => {
  const classes = useStyles();
  const color = props.color;
  return (
    <IconButton
      variant="contained"
      className={classes.root + " " + classes[color]}
    >
      {props.value == -1 ? "⠀" : props.value}
    </IconButton>
  );
};

export default StyledButton;
