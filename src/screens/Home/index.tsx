import { Container, Header, LogoImg, Title } from "./styles";

import Logo from "../../assets/299.png";

export function Home() {
  return (
    <Container>
      <Header>
        <LogoImg source={Logo} alt="Logo image" />
        <Title>Poker Club 299</Title>
      </Header>
    </Container>
  );
}
