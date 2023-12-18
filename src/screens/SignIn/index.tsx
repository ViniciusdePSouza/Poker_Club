import { Container } from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
     <Button title={"Entra com Google"} onPress={(e) => console.log('chegando aqui')}/>
    </Container>
  );
}
