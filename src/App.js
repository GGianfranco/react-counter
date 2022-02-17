import { useEffect, useState } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

function App() {
  const initialCounterState = 0;
  const initialEvenState = false;
  const [counter, setCounter] = useState(initialCounterState);
  const [even, setEven] = useState(initialEvenState);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(initialCounterState);
  };
  const isEven = (number) => number % 2 === 0;

  useEffect(() => {
    setEven(isEven(Number(counter)));
  }, [counter]);

  return (
    <div className="app">
      <div className="counter">
        <Typography variant="h2">Simple Counter</Typography>
        <Box
          className="counterValue"
          sx={{
            height: "50%",
            width: "80%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3">{counter}</Typography>
          <Typography variant="h4">{even ? "Even" : "Odd"}</Typography>
        </Box>
        <Box className="buttons">
          <IconButton onClick={decrement} aria-label="decrement">
            <RemoveIcon />
          </IconButton>
          <IconButton
            className="plus"
            onClick={increment}
            aria-label="increment"
          >
            <AddIcon />
          </IconButton>
        </Box>
        <Button
          className="reset"
          variant="contained"
          size="large"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
