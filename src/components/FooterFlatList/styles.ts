import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  margin: 24px 0;
`;

export const Title = styled.Text`
  width: 100%;

  margin-bottom: 28px;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;

  color: ${theme.COLORS.WHITE};
`;

export const Title2 = styled.Text`
  width: 100%;

  margin-bottom: 14px;

  text-align: center;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;

  color: ${theme.COLORS.WHITE};
`;

export const TextContent = styled.Text`
  width: 100%;

  margin-bottom: 8px;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;

  color: ${theme.COLORS.GRAY_700};
  text-align: center;
`;

export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Section = styled.View`
  width: 45%;
  height: 100%;

  padding: 12px;

  background-color: ${theme.COLORS.GRAY_300};
  border-radius: 8px;
`;

export const InnerSection = styled.View`
  width: 45%;

justify-content: center;
align-items: center;

text-align: center;
`;
