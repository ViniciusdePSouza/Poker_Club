import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #000;

  background-color: ${theme.COLORS.GRAY_400};

  padding: 50px
`;

export const TextSignIn = styled.Text`
  color: ${theme.COLORS.YELLOW_500};
`;
