import { Container, Header, LogoImg, Title } from "./styles";
import { Button } from "../../components/Button";


import Logo from "../../assets/299.png";

export function SignIn() {
  return (
    <Container>
      <Header>
          <LogoImg source={Logo} alt="Logo image" />
          <Title>Poker Club 299</Title>
      </Header>
      <Button
        title={"SignIn with Google"}
        onPress={(e) => console.log("chegando aqui")}
      />
    </Container>
  );
}
