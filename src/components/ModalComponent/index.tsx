import { Text } from "react-native";
import { Container, ModalComponent } from "./styles";

export function Modal(name: string){
return <Container>
    <ModalComponent>
        <Text>{name}</Text>
    </ModalComponent>
</Container>
}