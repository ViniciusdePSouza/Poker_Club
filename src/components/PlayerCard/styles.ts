import styled from "styled-components/native";
import theme from "../../theme";

export type PlayerCardVariantColor = boolean;
export type TextCardVariant = 'TITLE' | 'VALUE'
export type MarginCardVariant = 'ITEM' | 'TOTAL'

interface PlayerCardProps {
  variant: PlayerCardVariantColor;
}

interface TextCardProps {
  variant: TextCardVariant
}

interface MarginCardProps {
  variant: MarginCardVariant
}

const TextCardColor = {
  'TITLE': `${theme.COLORS.YELLOW_700}`,
  'VALUE': `${theme.COLORS.WHITE}`
}

const MarginCard = { 
  'ITEM': '0px',
  'TOTAL': '24px',
}

export const Container = styled.TouchableOpacity<PlayerCardProps>`
  flex-direction: row;
  align-items: center;
  position: relative;

  padding: 16px;

  gap: 8px;

  ${(props: PlayerCardProps) =>
    props.variant
      ? `background-color: ${theme.COLORS.GREEN_700};`
      : `background-color: ${theme.COLORS.GRAY_300};`}

  border-radius: 8px;

  margin-top: 16px;
`;

export const ModalView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ContentModal = styled.View`
  max-width: 80%;
  align-items: center;
  justify-content: center;
  background-color: ${theme.COLORS.GRAY_500};

  padding: 12px;

  border-radius: 8px;
`;

export const ChipImg = styled.Image`
  height: 40px;
  width: 48px;
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

export const PlayerImg = styled.Image`
  width: 140px;
  height: 150px;
  object-fit: cover;
`;

export const Card = styled.View<MarginCardProps>`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  background-color: ${theme.COLORS.GRAY_400};
  padding: 8px;
  margin-left: 16px;

  border-radius: 4px;

  gap: 8px;

  ${(props: MarginCardProps) => `margin-top: ${MarginCard[props.variant]}`};
`;

export const CardText = styled.Text<TextCardProps>`
  ${(props: TextCardProps) => `color: ${TextCardColor[props.variant]}`};

  font-family: ${theme.FONT_FAMILY.BOLD}
`

