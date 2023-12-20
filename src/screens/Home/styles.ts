import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #000;

  background-color: ${theme.COLORS.GRAY_400};

  padding: 50px;
`;

export const TextSignIn = styled.Text`
  color: ${theme.COLORS.YELLOW_500};
`;

export const Header = styled.View`
  margin-bottom: 36px;
  margin-top: -112px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family:  ${theme.FONT_FAMILY.BOLD};

  color: ${theme.COLORS.YELLOW_700};

  text-align: center;
`

export const LogoImg = styled.Image`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
