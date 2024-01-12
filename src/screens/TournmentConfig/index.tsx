import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { Text } from "react-native";

export function TournamentConfig() {
const navigation = useNavigation();

function handleNavigation() {
  navigation.navigate("HomeStack" as never);
}

  return (
    <Container>
      <Text style={{ color: "white", fontSize: 36 }}>
        Tournament Config works
      </Text>

      <Button title={"Navigate"} onPress={handleNavigation} />
    </Container>
  );
}
