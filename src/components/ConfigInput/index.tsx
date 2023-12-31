import { TextInputProps } from "react-native";
import { Container, InputText, Label } from "./styles";
import { useTheme } from "styled-components";

interface ConfigInput extends TextInputProps {
  label: string;
}

export function ConfigInput({ label, ...rest }: ConfigInput) {
  const { COLORS } = useTheme();
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <InputText {...rest} placeholderTextColor={COLORS.GRAY_300} keyboardType="numeric"/>
      </Container>
    </>
  );
}
