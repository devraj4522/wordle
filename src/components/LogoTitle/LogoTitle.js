import { Typography } from "@mui/material";
import React from "react";
import { style } from "./style";

const LogoTitle = (props) => {
  return (
    <Typography variant="h1" color="initial" sx={style}>
      Wordle
    </Typography>
  );
};

export default LogoTitle;
