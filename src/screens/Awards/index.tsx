import { SafeAreaView, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import { Icon } from "@rneui/themed";

import {
  Container,
  Podium,
  PodiumItem,
  PodiumText,
  Title,
  Wrapper,
} from "./style";
import theme from "../../theme";

import { usePlayers } from "../../hooks/playersContext";
import { useConfiguration } from "../../hooks/configureTournamentContext";

import { Calculation } from "../../utils/calculations";

import { AwardCard } from "../../components/AwardCard";

export function Awards() {
  const { configuration } = useConfiguration();
  const { players } = usePlayers();

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const calc = new Calculation(players, configuration);

  const [award, setAward] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [cashier, setCashier] = useState(0);
  const [firstPlace, setFirstPlace] = useState(0);
  const [secondPlace, setSecondPlace] = useState(0);
  const [thirdPlace, setThirdPlace] = useState(0);
  const [forthPlace, setForthPlace] = useState(0);
  const [fifthPlace, setFifthPlace] = useState(0);
  const [sixthPlace, setSixthPlace] = useState(0);

  useEffect(() => {
    const rebuys = calc.calculateRebuys();
    const addOns = calc.calculateAddOns();

    const rebuysMoney = calc.calculateItemMoney("REBUY", rebuys);
    const buyInMoney = calc.calculateItemMoney("BUYIN", players.length);
    const addOnsMoney = calc.calculateItemMoney("ADDON", addOns);

    const totalMoneyAmount = rebuysMoney! + buyInMoney! + addOnsMoney!;
    setTotalMoney(totalMoneyAmount);

    const cashier = players.length * 15;
    setCashier(cashier);

    const awardMoneyAmount = totalMoneyAmount - cashier;
    setAward(awardMoneyAmount);

    setFirstPlace(awardMoneyAmount * configuration.prize.first);
    setSecondPlace(awardMoneyAmount * configuration.prize.second);
    setThirdPlace(awardMoneyAmount * configuration.prize.third);
    setForthPlace(awardMoneyAmount * configuration.prize.forth);
    setFifthPlace(awardMoneyAmount * configuration.prize.fifth);
    setSixthPlace(awardMoneyAmount * configuration.prize.sixth);
  }, [players, configuration, award]);

  return (
    <ScrollView>
      <Container>
        <SafeAreaView>
          <Title>Premiação</Title>

          <Wrapper variant="PODIUM">
            <PodiumItem>
              <PodiumText>{formatter.format(secondPlace)}</PodiumText>
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
              <PodiumText>{formatter.format(firstPlace)}</PodiumText>
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

            {configuration.prize.awardedNumber >= 4 && (
              <PodiumItem>
                <PodiumText>{formatter.format(forthPlace)}</PodiumText>
                <Podium variant="FOURTH"></Podium>
              </PodiumItem>
            )}
          </Wrapper>

          {configuration.prize.awardedNumber >= 5 && (
            <AwardCard
              title={"Quinto lugar"}
              iconType="entypo"
              iconName={"medal"}
              content={formatter.format(fifthPlace)}
              color={theme.COLORS.GRAY_500}
              isPlayerShown={true}
            />
          )}

          {configuration.prize.awardedNumber == 6 && (
            <AwardCard
              title={"Sexto lugar"}
              iconType="entypo"
              iconName={"medal"}
              content={formatter.format(fifthPlace)}
              color={theme.COLORS.RED_DARK}
              isPlayerShown={true}
            />
          )}

          <Title>Informações do dinheiro</Title>

          <AwardCard
            title={"Total arrecadado"}
            iconName={"money"}
            iconType="font-awesome"
            content={formatter.format(totalMoney).toString()}
            color={theme.COLORS.GREEN_700}
          />

          <AwardCard
            title={"Caixinha"}
            iconName={"inbox"}
            iconType="ant-design"
            content={formatter.format(cashier).toString()}
            color={theme.COLORS.GRAY_700}
          />

          <AwardCard
            title={"Prêmio Total"}
            iconName={"trophy"}
            iconType="entypo"
            content={formatter.format(award).toString()}
            color={theme.COLORS.YELLOW_700}
          />
        </SafeAreaView>
      </Container>
    </ScrollView>
  );
}
