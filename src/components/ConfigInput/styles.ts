import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;

  align-items: center;

  gap: 8px;

  background-color: ${theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 8px;
`;

export const InputText = styled.TextInput`
  width: 100%;

  border-radius: 4px;
  text-align: center;
  padding: 2px 4px;
  color: ${theme.COLORS.GRAY_700};
  background-color: ${theme.COLORS.GRAY_300};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const Label = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.YELLOW_500};
`;
