import { Container, Header, LogoImg } from "./styles";

import Logo from "../../assets/299.png";

import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";
import { useConfiguration } from "../../hooks/configureTournamentContext";

export function Home() {
  const { resetConfiguration } = useConfiguration();
  const navigation = useNavigation();
  function handleNavigation() {
    resetConfiguration();
    navigation.navigate("Config" as never);
  }
  return (
    <>
      <Container>
        <Header>
          <LogoImg source={Logo} alt="Logo image" />
        </Header>
        <Button title={"Configurar Novamente"} onPress={handleNavigation} />
      </Container>
    </>
  );
}
