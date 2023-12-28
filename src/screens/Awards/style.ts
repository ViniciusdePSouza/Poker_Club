import styled from "styled-components/native";
import theme from "../../theme";

export type PodiumPositionType = "FIRST" | "SECOND" | "THIRD" | "FOURTH";
export type WrapperAlignmentType = "CASHIER" | "PODIUM" 

interface PodiumProps {
  variant: PodiumPositionType;
}

interface WrapperProps {
  variant: WrapperAlignmentType
} 

const wrapperAlignment = { 
  CASHIER : 'center',
  PODIUM :'flex-end'
}

const podiumColor = {
  FIRST: `${theme.COLORS.YELLOW_700}`,
  SECOND: `${theme.COLORS.GRAY_300}`,
  THIRD: `${theme.COLORS.BRONZE_500}`,
  FOURTH: `${theme.COLORS.GRAY_100}`,
};

const podiumHeigh = {
  FIRST: "130px",
  SECOND: "100px",
  THIRD: "70px",
  FOURTH: "40px",
};



export const Title = styled.Text`
  width: 100%;

  margin: 28px 0;

  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XL}px;

  color: ${theme.COLORS.WHITE};
`;

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  ${(props: WrapperProps) => `align-items: ${wrapperAlignment[props.variant]}`};

  margin-bottom: 24px;
`;

export const PodiumItem = styled.View`
  gap: 12px;
`;

export const PodiumText = styled.Text`
  padding: 0 8px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;

  color: ${theme.COLORS.WHITE};
`;

export const Podium = styled.View<PodiumProps>`
  padding: 12px;

  align-items: center;
  justify-content: center;

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  ${(props: PodiumProps) => `background-color: ${podiumColor[props.variant]}`};

  ${(props: PodiumProps) => `height: ${podiumHeigh[props.variant]}`};
`;


export const Container = styled.View`
  flex: 1;
  padding: 12px;
`;


