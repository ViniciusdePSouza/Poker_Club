import { Container } from "./styles";
import { Input } from "../../components/Input";

export function SignIn() {
  return (
    <Container>
     <Input placeholder="Digite seu negócio aqui" onChangeText={(value) => console.log(value)}/>
    </Container>
  );
}
