import { useEffect, useState } from "react";
import { usePlayers } from "../../hooks/playersContext";
import {
  Container,
  Content,
  InnerSection,
  Section,
  TextContent,
  Title,
  Title2,

} from "./styles";

export function FooterFlatList() {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const { players, eliminatedPlayers } = usePlayers()
  const [rebuys, setRebuys] = useState(0)

  function calculateRebuys(){
    const totalRebuys = players.reduce((accumulator, currentPlayer) => {
      return accumulator + currentPlayer.rebuys;
    }, 0);

    return totalRebuys
  }

  const amount1 = 349.29;
  const amount2 = 349.29;
  const amount3 = 349.29;
  const amount4 = 349.29;

  useEffect(() => {
    const rebuysCalculated = calculateRebuys()

    setRebuys(rebuysCalculated)
  }, [players])

  return (
    <Container>
      <Title>Tournament Money Info</Title>

      <Content>
        <Section>
          <Title2>Price</Title2>

          <TextContent>🥇:    {formatter.format(amount1)}</TextContent>
          <TextContent>🥈:    {formatter.format(amount1)}</TextContent>
          <TextContent>🥉:    {formatter.format(amount1)}</TextContent>
        </Section>
        <Section>
          <Title2>Average Stack</Title2>

          <TextContent>798988,00</TextContent>
          <Content>
            <InnerSection >
              <Title2>Players Number</Title2>

              <TextContent>{players.length-eliminatedPlayers.length}/{players.length}</TextContent>
            </InnerSection>

            <InnerSection>
              <Title2>Rebuy Counter</Title2>

              <TextContent>{rebuys}</TextContent>
            </InnerSection>
          </Content>
        </Section>
      </Content>
    </Container>
  );
}
