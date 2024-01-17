import styled from "styled-components/native";
import theme from "../../theme";
import { TouchableOpacityProps } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 16px 24px;

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

export const NumberAwardedPlayersView = styled.View`
  flex-direction: column;

  align-items: center;

  gap: 8px;

  background-color: ${theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 8px;
`;

export const LabelAwardedNumber = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.YELLOW_500};
`;

export const AwardedNumberText = styled.Text`
  width: 100%;

  border-radius: 4px;
  text-align: center;
  color: ${theme.COLORS.WHITE};
  background-color: ${theme.COLORS.GRAY_300};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.LG}px;
`;

export const AwardedNumberButton = styled.TouchableOpacity<TouchableOpacityProps>`
  border-radius: 8px;

  padding: 12px;

  background-color:${theme.COLORS.GRAY_300};

  opacity: ${(props: TouchableOpacityProps) => props.disabled ? 0.6 : 1};
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
