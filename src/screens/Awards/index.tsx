import { SafeAreaView, Text } from "react-native";
import {
  Container,
  Podium,
  PodiumItem,
  PodiumText,
  Title,
  Wrapper,
} from "./style";
import { useEffect, useState } from "react";
import { usePlayers } from "../../hooks/playersContext";
import { Icon } from "@rneui/themed";
import theme from "../../theme";

export function Awards() {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { players, eliminatedPlayers } = usePlayers();
  const [rebuys, setRebuys] = useState(0);

  function calculateRebuys() {
    const totalRebuys = players.reduce((accumulator, currentPlayer) => {
      return accumulator + currentPlayer.rebuys;
    }, 0);

    return totalRebuys;
  }

  const amount1 = 349.29;
  const amount2 = 349.29;
  const amount3 = 349.29;
  const amount4 = 349.29;

  useEffect(() => {
    const rebuysCalculated = calculateRebuys();

    setRebuys(rebuysCalculated);
  }, [players]);

  return (
    <Container>
      <SafeAreaView>
        <Title>Tournament Award</Title>

        <Wrapper variant='PODIUM'>
          <PodiumItem>
            <PodiumText>{formatter.format(amount1)}</PodiumText>
            <Podium variant="SECOND">
              <Icon
                type="material-icons"
                name="filter-2"
                size={48}
                color={theme.COLORS.GRAY_200}
              />
            </Podium>
          </PodiumItem>

          <PodiumItem>
            <PodiumText>{formatter.format(amount1)}</PodiumText>
            <Podium variant="FIRST">
              <Icon
                type="material-icons"
                name="filter-1"
                size={48}
                color={theme.COLORS.GREEN_700}
              />
            </Podium>
          </PodiumItem>

          <PodiumItem>
            <PodiumText>{formatter.format(amount1)}</PodiumText>
            <Podium variant="THIRD">
              <Icon
                type="material-icons"
                name="filter-3"
                size={48}
                color={theme.COLORS.BRONZE_700}
              />
            </Podium>
          </PodiumItem>

          <PodiumItem>
            <PodiumText>{formatter.format(amount1)}</PodiumText>
            <Podium variant="FOURTH"></Podium>
          </PodiumItem>
        </Wrapper>

        <Title>Cashier</Title>

        <Wrapper variant='CASHIER'>
          <PodiumItem>
            <Icon
              name="inbox"
              type="ant-design"
              size={48}
              color={theme.COLORS.BRONZE_700}
            />
          </PodiumItem>
        <PodiumText>{formatter.format(amount1)}</PodiumText>
        </Wrapper>
      </SafeAreaView>
    </Container>
  );
}
