import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  padding: 32px;

  gap: 16px;

  margin-top: 48px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.YELLOW_700};
  text-transform: uppercase;

  margin-bottom: 16px;
`;

export const BoxLvlWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  opacity: 0.6;

  gap: 16px;
`;

export const LvlsBox = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;

  border-radius: 4px;

  background: transparent;
`;

export const LvlText = styled.Text`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
  text-transform: uppercase;

  margin-bottom: 16px;
`

export const MainLvlText = styled.Text`
font-size: 48px;
font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
`

export const ButtonControlView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  margin-top: 62px;

  padding: 16px;

  border-radius: 8px;
`;

export const TimerButton = styled.TouchableOpacity`
  border-radius: 8px;

  padding: 18px;
  
  min-width: 60px;

  background-color: ${theme.COLORS.GRAY_300};
`;
