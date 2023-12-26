import styled from "styled-components/native";
import theme from "../../theme";

export type PlayerCardVariantColor = boolean;

interface PlayerCardProps {
  variant: PlayerCardVariantColor;
}

export const Container = styled.View<PlayerCardProps>`
  flex-direction: row;
  align-items: center;
  position: relative;

  padding: 16px;

  gap: 24px;

  ${(props: PlayerCardProps) =>
    props.variant
      ? `background-color: ${theme.COLORS.GREEN_700};`
      : `background-color: ${theme.COLORS.GRAY_300};`}

  border-radius: 8px;

  margin-top: 16px;
`;

export const ChipImg = styled.Image`
  height: 40px;
  width: 54px;
`;

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;

  color: ${theme.COLORS.WHITE};
`;

export const Button = styled.TouchableOpacity`
  border-radius: 8px;

  padding: 4px;

  background-color: ${theme.COLORS.YELLOW_700};
`;

export const Box = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
  position: absolute;
  z-index: 1;

  padding: 12px;

  right: 0;
`;

export const AddOnBox = styled.View`
  align-items: center;
  justify-content: center;

  align-self: flex-start;

  padding-top: 16px;

  gap: -8px;
`;

export const TextContent = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SM}px;

  color: ${theme.COLORS.GRAY_200};
`;

export const EliminationText = styled.Text`
  flex: 1;
  text-align: right;
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.MD}px;

  color: ${theme.COLORS.GRAY_200};
`;
