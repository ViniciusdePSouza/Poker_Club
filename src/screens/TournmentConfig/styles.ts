import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;

  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};

  color: ${theme.COLORS.GRAY_100};
  margin-top: 24px;
`;

export const PercentagePrizeInputWrapper = styled.View`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ConfigWrapper = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: flex-start;

  gap: 8px;

  margin: 12px 0;
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
`;
