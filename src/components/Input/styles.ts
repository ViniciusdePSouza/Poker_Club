import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TextInput`
  flex: 1;

  width: 100%;
  max-height: 56px;

  color: ${theme.COLORS.YELLOW_500};
  background-color: ${theme.COLORS.GRAY_500};

  border-radius: 6px;
  padding: 16px;

  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`;
