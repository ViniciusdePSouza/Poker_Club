import { Text, TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";


interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({title, ...rest}: ButtonProps) {
    return <Container {...rest}><ButtonText>{title}</ButtonText></Container>
}