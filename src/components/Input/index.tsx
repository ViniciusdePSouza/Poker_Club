import { TextInputProps } from "react-native";
import { Container, InputText } from "./styles";
import { useTheme } from "styled-components";
import { Icon } from "@rneui/themed";
import theme from "../../theme";

interface InputProps extends TextInputProps {
  errorMessage?: string;
}

export function Input({ errorMessage = "", ...rest }: InputProps) {
  const { COLORS } = useTheme();
  return (
    <>
      <Container>
        <Icon type="entypo" name="user" color={theme.COLORS.GRAY_300} />
        <InputText {...rest} placeholderTextColor={COLORS.GRAY_300} />
      </Container>
    </>
  );
}
