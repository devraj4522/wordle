import React, { useEffect, useState } from "react";
import Key from "./Key";
import BackspaceIcon from "@mui/icons-material/Backspace";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import IconButton from "@mui/material/IconButton";
import WrongKeyModal from "./WrongKeyModal";
import { useStyles } from "./style";

const KeyPads = (props) => {
  const classes = useStyles();
  // console.log(classes);
  const [isvalidWord, setisvalidWord] = useState(false);

  const onDeleteLetter = () => {
    // console.log("backspace");
    if (!props.currentWord) return;
    const word = props.currentWord.slice(0, -1);
    setTimeout(() => {
      props.setCurrentWord(word);
      props.onDelete();
    }, 0);
    // console.log(props.currentWord);
  };

  const validate = () => {
    props.onvalidate();
  };

  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <>
      <div className={classes.keyboard}>
        <div className={classes.keyRow}>
          {keys[0].map((item, index) => (
            <Key
              key={index}
              keyValue={item}
              currentWord={props.currentWord}
              setCurrentWord={props.setCurrentWord}
              setkeyPressed={props.setkeyPressed}
              setCollorArray={props.setcollorArray}
              ansWord={props.ansWord}
              win={props.win}
              setwin={props.setwin}
              setisvalidWord={setisvalidWord}
            />
          ))}
        </div>
        <div className={classes.keyRow2}>
          {keys[1].map((item, index) => (
            <Key
              key={index}
              keyValue={item}
              currentWord={props.currentWord}
              setCurrentWord={props.setCurrentWord}
              setkeyPressed={props.setkeyPressed}
              ansWord={props.ansWord}
              setCollorArray={props.setcollorArray}
              win={props.win}
              setwin={props.setwin}
              setisvalidWord={setisvalidWord}
            />
          ))}
        </div>
        <div className={classes.keyRow}>
          <IconButton className={classes.key} onClick={validate}>
            <KeyboardReturnIcon />
          </IconButton>
          {keys[2].map((item, index) => (
            <Key
              key={index}
              keyValue={item}
              setCurrentWord={props.setCurrentWord}
              currentWord={props.currentWord}
              setkeyPressed={props.setkeyPressed}
              setCollorArray={props.setcollorArray}
              ansWord={props.ansWord}
              win={props.win}
              setwin={props.setwin}
              setisvalidWord={setisvalidWord}
            />
          ))}
          <div>
            <IconButton className={classes.key} onClick={onDeleteLetter}>
              <BackspaceIcon />
            </IconButton>
          </div>
        </div>
      </div>
      {isvalidWord && <WrongKeyModal setisvalidWord={setisvalidWord} />}
    </>
  );
};

export default KeyPads;
