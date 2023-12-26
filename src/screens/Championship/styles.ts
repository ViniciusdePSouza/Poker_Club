import styled from "styled-components/native";
import theme from "../../theme";

type PressebleVariantColor = "REMOVE" | "DECLASSIFIED";

interface PressebleProps {
  variant: PressebleVariantColor;
}

const PressableColor = {
  REMOVE: `${theme.COLORS.RED_DARK}`,
  DECLASSIFIED: `${theme.COLORS.YELLOW_700}`,
};

const PressableMarginRight = {
  REMOVE: "16px",
  DECLASSIFIED: "0",
};

const PressableMarginLeft = {
  REMOVE: "0",
  DECLASSIFIED: "16px",
};

export const PlayersList = styled.FlatList`
  padding: 12px;
`;

export const Title = styled.Text`
  width: 100%;

  margin-bottom: 28px;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XL}px;

  color: ${theme.COLORS.WHITE};
`;

export const Tittle2 = styled.Text`
  width: 100%;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;

  color: ${theme.COLORS.WHITE};
`;

export const InputWrapper = styled.View`
  flex-direction: row;

  margin-bottom: 36px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 20%;

  max-height: 56px;

  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.YELLOW_700};

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const PressablePlayerMenu = styled.Pressable<PressebleProps>`
  height: 68px;
  width: 70px;
  margin-top: 20px;
  ${(props: PressebleProps) =>
    `margin-right: ${PressableMarginRight[props.variant]}`};
  ${(props: PressebleProps) =>
    `margin-left: ${PressableMarginLeft[props.variant]}`};
  border-radius: 6px;
  ${(props: PressebleProps) => `background: ${PressableColor[props.variant]}`};
  justify-content: center;
  align-items: center;
`;
