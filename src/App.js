import Header from "./components/Header/Header";
import KeyPads from "./components/KeyPads/KeyPads";
import LogoTitle from "./components/LogoTitle/LogoTitle";
import WordleGrid from "./components/WordleGrid/WordleGrid";
import Container from "@mui/material/Container";
import { useState } from "react";
import { guessed } from "./utils/answers";
import InitialMessage from "./components/GameRule/InitialMessage";

function App() {
  const [keyPressed, setkeyPressed] = useState("");
  const [ansWord, setAnsWord] = useState(guessed);
  const [onDelete, setonDelete] = useState(() => {});
  const [win, setwin] = useState(0);
  // console.log(guessed);
  // console.log(win);
  const [currentColorArray, setcurrentColorArray] = useState([
    "black",
    "black",
    "black",
    "black",
    "black",
  ]);
  const [collorArray, setcollorArray] = useState([
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
    ["black", "black", "black", "black", "black"],
  ]);
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <LogoTitle />
        <WordleGrid
          keyPressed={keyPressed}
          currentColorArray={currentColorArray}
          setcollorArray={setcollorArray}
          collorArray={collorArray}
          setonDelete={setonDelete}
          rightAnswer={guessed}
        />
      </Container>
      <KeyPads
        setkeyPressed={setkeyPressed}
        ansWord={ansWord}
        setcollorArray={setcurrentColorArray}
        onDelete={onDelete}
        setwin={setwin}
        win={win}
      />
      <InitialMessage />
    </>
  );
}

export default App;
