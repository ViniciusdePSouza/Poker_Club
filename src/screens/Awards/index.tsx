import { SafeAreaView } from "react-native";
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
import { useConfiguration } from "../../hooks/configureTournamentContext";
import { AwardCard } from "../../components/AwardCard";
import { Calculation } from "../../utils/calculations";

export function Awards() {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  
  const { configuration } = useConfiguration();
  
  const { players } = usePlayers()
  const calc = new Calculation(players, configuration);

  const [award, setAward] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [firstPlace, setFirstPlace] = useState(0);
  const [secondPlace, setSecondPlace] = useState(0);
  const [thirdPlace, setThirdPlace] = useState(0);
  const [forthPlace, setForthPlace] = useState(0);
  const [cashier, setCashier] = useState(0);

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

    if (players.length > 10) {
      setFirstPlace(awardMoneyAmount * 0.4);
      setSecondPlace(awardMoneyAmount * 0.3);
      setThirdPlace(awardMoneyAmount * 0.2);
      setForthPlace(awardMoneyAmount * 0.1);
    } else {
      setFirstPlace(awardMoneyAmount * 0.5);
      setSecondPlace(awardMoneyAmount * 0.3);
      setThirdPlace(awardMoneyAmount * 0.2);
    }
  }, [players, configuration, award]);

  return (
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

          {players.length > 10 && (
            <PodiumItem>
              <PodiumText>
                {forthPlace > 0 ? formatter.format(forthPlace) : 0}
              </PodiumText>
              <Podium variant="FOURTH"></Podium>
            </PodiumItem>
          )}
        </Wrapper>

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
  );
}
