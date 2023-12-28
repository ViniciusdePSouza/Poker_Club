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
  const [award, setAward] = useState(0);
  const [firstPlace, setFirstPlace] = useState(0);
  const [secondPlace, setSecondPlace] = useState(0);
  const [thirdPlace, setThirdPlace] = useState(0);
  const [forthPlace, setForthPlace] = useState(0);
  const [cashier, setCashier] = useState(0);

  function calculateRebuys() {
    const totalRebuys = players.reduce((accumulator, currentPlayer) => {
      return accumulator + currentPlayer.rebuys;
    }, 0);

    return totalRebuys;
  }

  function calculateAddOns() {
    const totalAddOnsArray = players.filter((player) => player.addOn);

    return totalAddOnsArray.length;
  }

  useEffect(() => {
    const rebuysCalculated = calculateRebuys();

    setRebuys(rebuysCalculated);
  }, [players]);

  useEffect(() => {
    const rebuysMoney = 40 * rebuys;
    const buyInMoney = players.length * 40;
    const addOnsMoney = calculateAddOns();

    const totalMoneyAmount = rebuysMoney + buyInMoney + addOnsMoney;
    const cashier = totalMoneyAmount * 0.1;

    setCashier(cashier);

    const awardMoneyAmount = totalMoneyAmount - cashier;

    if (players.length > 10) {
      setFirstPlace(awardMoneyAmount * 0.5);
      setSecondPlace(awardMoneyAmount * 0.2);
      setThirdPlace(awardMoneyAmount * 0.1);
      setForthPlace(awardMoneyAmount * 0.05);
    } else {
      setFirstPlace(awardMoneyAmount * 0.5);
      setSecondPlace(awardMoneyAmount * 0.3);
      setThirdPlace(awardMoneyAmount * 0.2);
    }

    setAward(award);
  }, [rebuys, players]);

  return (
    <Container>
      <SafeAreaView>
        <Title>Tournament Award</Title>

        <Wrapper variant="PODIUM">
          <PodiumItem>
            <PodiumText>{formatter.format(firstPlace)}</PodiumText>
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
            <PodiumText>{formatter.format(secondPlace)}</PodiumText>
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
            <PodiumText>{formatter.format(thirdPlace)}</PodiumText>
            <Podium variant="THIRD">
              <Icon
                type="material-icons"
                name="filter-3"
                size={48}
                color={theme.COLORS.BRONZE_700}
              />
            </Podium>
          </PodiumItem>

          {players.length > 10 && (
            <PodiumItem>
              <PodiumText>
                {forthPlace > 0 ? formatter.format(forthPlace) : 0}
              </PodiumText>
              <Podium variant="FOURTH"></Podium>
            </PodiumItem>
          )}
        </Wrapper>

        <Title>Cashier</Title>

        <Wrapper variant="CASHIER">
          <PodiumItem>
            <Icon
              name="inbox"
              type="ant-design"
              size={48}
              color={theme.COLORS.BRONZE_700}
            />
          </PodiumItem>
          <PodiumText>{formatter.format(cashier)}</PodiumText>
        </Wrapper>
      </SafeAreaView>
    </Container>
  );
}
