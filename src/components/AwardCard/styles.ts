import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.COLORS.GRAY_300};
  border-radius: 8px;

  padding: 12px 8px;

  gap: 12px;

  margin-bottom: 24px;
`;

export const TextContent = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XL}px;

  color: ${theme.COLORS.GRAY_100};
`;
