import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button";
import theme from "../../theme";
import { Container } from "./styles";

export function Timer() {
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const structure = [
    50, 100, 150, 200, 300, 400, 600, 800, 1000, 1200, 1600, 2000, 3000, 4000,
    6000, 8000, 10000, 15000, 20000,
  ];
  const [blindCounter, setBlindCounter] = useState(0);

  useEffect(() => {
    let timeout: any;

    if (isRunning) {
      timeout = setTimeout(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            resetCountdown();
            setBlindCounter((state) => state + 1);
            return;
          }

          setMinutes((state) => state - 1);
          setSeconds(59);
        } else {
          setSeconds((state) => state - 1);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isRunning, minutes, seconds]);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const stopCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    if(blindCounter 
      >= 5) {
      setMinutes(12);
      setSeconds(0);
      return
    }

    setMinutes(15);
    setSeconds(0);
  };

  return (
    <Container>
      <Text style={{ color: theme.COLORS.WHITE, fontSize: 42 }}>{`blind: ${
        structure[blindCounter] / 2
      } / ${structure[blindCounter]}`}</Text>

      <Text style={{ color: theme.COLORS.WHITE, fontSize: 42 }}>{`${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</Text>
      <Button title={"Start"} onPress={startCountdown} />
      <Button title={"Stop"} onPress={stopCountdown} />
      <Button title={"Reset"} onPress={resetCountdown} />
    </Container>
  );
}
