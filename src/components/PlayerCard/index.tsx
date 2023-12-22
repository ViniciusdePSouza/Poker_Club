import {
  AddOnBox,
  Box,
  Button,
  ChipImg,
  Container,
  TextContent,
  Title,
} from "./styles";

import Chip from "../../assets/chip.png";
import theme from "../../theme";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import { CheckBox } from "react-native-elements";
import { Players } from "../../@types/players";

interface PlayerCardProps extends Omit<Players, "id" | 'total'> {}

export function PlayerCard({
  name,
  addOn,
  isPlaying,
  rebuys,
}: PlayerCardProps) {
  const [isChecked, setIsChecked] = useState(addOn);
  const [rebuysCounter, setRebuysCounter] = useState(rebuys);

  function operation(isAdding: boolean) {
    if (isAdding) {
      setRebuysCounter((state) => state + 1);
     
      return;
    }
    setRebuysCounter((state) => state - 1);
  }

  return (
    <Container>
      <ChipImg source={Chip} />

      <Title>{name}</Title>

      <Box>
        <AddOnBox>
          <TextContent>ADD-ON</TextContent>
          <CheckBox
            checkedColor={theme.COLORS.YELLOW_700}
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
        </AddOnBox>
        <Button onPress={() => operation(false)}>
          <Icon type="entypo" name="minus" color={theme.COLORS.WHITE} />
        </Button>

        <Title>{String(rebuysCounter)}</Title>

        <Button onPress={() => operation(true)}>
          <Title>
            <Icon type="entypo" name="plus" color={theme.COLORS.WHITE} />
          </Title>
        </Button>
      </Box>
    </Container>
  );
}
