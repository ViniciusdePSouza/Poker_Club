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

export interface PlayerCardProps {
  name: string;
}

export function PlayerCard({ name }: PlayerCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <ChipImg source={Chip} />

      <Title>{name}</Title>

      <Box>
        <AddOnBox>
          <TextContent>ADD-ON</TextContent>
          <CheckBox checkedColor={theme.COLORS.YELLOW_700} checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}/>
        </AddOnBox>
        <Button>
          <Icon type="entypo" name="minus" color={theme.COLORS.WHITE} />
        </Button>

        <Title>3</Title>

        <Button>
          <Title>
            <Icon type="entypo" name="plus" color={theme.COLORS.WHITE} />
          </Title>
        </Button>
      </Box>
    </Container>
  );
}
