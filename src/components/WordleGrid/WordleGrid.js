import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ShowAns from "./ShowAns";
import { useStyles } from "./style";
import StyledButton from "./StyledButton";

const WordleGrid = (props) => {
  const [wordleArray, setWordleArray] = useState([
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1],
  ]);
  const [currIndex, setCurrIndex] = useState(0);
  const [showAns, setshowAns] = useState(false);

  useEffect(() => {
    props.setonDelete(() => onDelete);
  }, [wordleArray, currIndex]);

  const onDelete = () => {
    if (currIndex == 0) return;
    const newWordleArray = wordleArray;
    newWordleArray[Math.floor((currIndex - 1) / 5) % 5][(currIndex - 1) % 5] =
      -1;
    const newIndex = currIndex - 1;
    setCurrIndex(newIndex);
    setWordleArray(newWordleArray);
    console.log(newWordleArray);
  };

  useEffect(() => {
    if (props.keyPressed) {
      const index = currIndex;
      const array = wordleArray;
      // console.log(Math.floor(index / 5) % 5);
      // console.log(index % 5);
      array[Math.floor(index / 5) % 5][index % 5] = props.keyPressed;
      setWordleArray(array);

      setCurrIndex(index + 1);
      // If first row is complete
      if ((index + 1) % 5 == 0) {
        let allColors = props.collorArray;
        allColors[Math.floor(index / 5)] = props.currentColorArray;
        props.setcollorArray(allColors);
      }

      // if wordle is complete decide win or loss
      console.log(index);
      if (index == 24) {
        setshowAns(props.rightAnswer);
      }
    }
  }, [props.keyPressed]);

  return (
    <div>
      <Grid container spacing={1} justifyContent="center">
        {wordleArray.map((item, index) => (
          <Grid key={index} item container spacing={1} justifyContent="center">
            {item.map((itemChild, indexChild) => (
              <Grid key={indexChild}>
                <StyledButton
                  color={props.collorArray[index][indexChild]}
                  value={itemChild}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      {showAns && <ShowAns rightAnswer={props.rightAnswer} />}
      {<ShowAns rightAnswer={props.rightAnswer} setshowAns={setshowAns} />}
    </div>
  );
};

export default WordleGrid;
