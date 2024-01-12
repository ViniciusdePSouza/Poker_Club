import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;

  gap: 24px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ConfigWrapper = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-evenly;

  gap: 8px;
`;

export const LogoImg = styled.Image`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};

  color: ${theme.COLORS.YELLOW_700};

  text-align: center;
`;
