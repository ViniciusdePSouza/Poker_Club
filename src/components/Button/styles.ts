import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity`
  flex: 1;
  max-height: 56px;
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.YELLOW_700};

  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;

  color: ${theme.COLORS.GRAY_500};
`;
