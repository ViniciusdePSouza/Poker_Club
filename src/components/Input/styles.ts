import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  max-height: 56px;

  align-items: center;

  gap: 16px;

  background-color: ${theme.COLORS.GRAY_500};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 16px;
`;

export const InputText = styled.TextInput`
  color: ${theme.COLORS.YELLOW_500};
  background-color: ${theme.COLORS.GRAY_500};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`;
