import { Container, Header, LogoImg } from "./styles";

import Logo from "../../assets/299.png";

import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  function handleNavigation() {
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
