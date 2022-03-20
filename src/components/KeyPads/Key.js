import React, { useState } from "react";
import { useStyles } from "./style";
import { IconButton } from "@mui/material";
import { allMatchingLetter, isWin, isWordValid } from "../../utils/wordValid";
import { WORDS } from "../../utils/validGuesses";

const Key = (props) => {
  const classes = useStyles();

  const buttonClickAction = (val) => {
    if (props.currentWord.length > 5) {
      return;
    }

    const currentWord = props.currentWord + val;

    if (currentWord.length == 5) {
      // console.log("validate word of length 5");
      // ToDo: If word is valid move to next line
      if (isWordValid(currentWord, WORDS)) {
        props.setkeyPressed(val);
        const machingColorArray = allMatchingLetter(currentWord, props.ansWord);
        props.setCollorArray(machingColorArray);
        props.setCurrentWord("");
        if (isWin(machingColorArray)) {
          const win = props.win;
          // console.log(win);
          props.setwin(win + 1);
        }
      } else {
        // ToDo: Add Some effect
        props.setisvalidWord(true);
      }
    } else {
      props.setkeyPressed(val);
      props.setCurrentWord(currentWord);
    }
  };
  return (
    <IconButton
      className={classes.key}
      onClick={(event) => buttonClickAction(props.keyValue)}
    >
      {props.keyValue}
    </IconButton>
  );
};

export default Key;
