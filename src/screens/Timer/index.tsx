import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import theme from "../../theme";
import { Icon } from "@rneui/themed";
import { Audio } from "expo-av";
import {
  BoxLvlWrapper,
  ButtonControlView,
  Container,
  LvlText,
  LvlsBox,
  TimerButton,
  Title,
} from "./styles";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const structure = [
    50, 100, 150, 200, 300, 400, 600, 800, 1000, 1200, 1600, 2000, 2400, 2800,
    3200, 4000, 5000, 6000, 8000, 10000, 15000, 20000,
  ];
  const [blindCounter, setBlindCounter] = useState(0);

  async function playSound() {
    const file = require("../../assets/alert.mp3");
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

    await sound.setPositionAsync(0);
    await sound.playAsync();
  }

  function changeBlind(operation: boolean) {
    if(operation)  {
      setBlindCounter((state) => ++state)
      if(blindCounter+1 > 5) setMinutes(12)
      return 
    }

    setBlindCounter((state) => --state)
    if(blindCounter <= 6) {
      setMinutes(15)
    }
  }
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (isRunning) {
      timeout = setTimeout(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            playSound();
            setBlindCounter((state) => state + 1);
            resetCountdown();
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

  function startCountdown() {
    setIsRunning(true);
  }

  function stopCountdown() {
    setIsRunning(false);
  }

  function resetCountdown() {
    if (blindCounter >= 5) {
      setMinutes(12);
      setSeconds(0);
      return;
    }

    setMinutes(15);
    setSeconds(0);
  }

  return (
    <ScrollView>
      <Container>
        <Title>Cronômetro</Title>
        <BoxLvlWrapper>
          <LvlsBox>
            <LvlText>Anterior</LvlText>
            <LvlText>
              {blindCounter > 0
                ? `${structure[blindCounter - 1] / 2} / ${
                    structure[blindCounter - 1]
                  }`
                : "---/---"}{" "}
            </LvlText>
          </LvlsBox>
          <LvlsBox>
            <LvlText>Próximo</LvlText>
            <LvlText>
              {blindCounter + 1
                ? `${structure[blindCounter + 1] / 2} / ${
                    structure[blindCounter + 1]
                  }`
                : "---/---"}
            </LvlText>
          </LvlsBox>
        </BoxLvlWrapper>

        <Text style={{ color: theme.COLORS.WHITE, fontSize: 42 }}>{`${
          structure[blindCounter] / 2
        } / ${structure[blindCounter]}`}</Text>

        <Text style={{ color: theme.COLORS.WHITE, fontSize: 104 }}>{`${String(
          minutes
        ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</Text>

        <ButtonControlView>
          <TimerButton onPress={startCountdown}>
            <Icon name={"controller-play"} type="entypo" />
          </TimerButton>
          <TimerButton onPress={stopCountdown}>
            <Icon name={"pause"} type="foundation" />
          </TimerButton>
          <TimerButton onPress={resetCountdown}>
            <Icon name={"controller-stop"} type="entypo" />
          </TimerButton>
        </ButtonControlView>

        <ButtonControlView>
          <TimerButton  onPress={() => changeBlind(false)}>
            <Icon name={"previous"} type="foundation" />
          </TimerButton>
          <TimerButton onPress={() => changeBlind(true)}>
            <Icon name={"next"} type="foundation" />
          </TimerButton>
        </ButtonControlView>
      </Container>
    </ScrollView>
  );
}
