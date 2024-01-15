import styled from "styled-components/native";
import theme from "../../theme";
import { AwardCardProps } from ".";

export const Container = styled.View<AwardCardProps>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.COLORS.GRAY_300};
  border-radius: 8px;

  padding: 12px 8px;

  opacity: ${(props: AwardCardProps) => (props.isPlayerShown ? "0.85" : "1")};

  gap: 12px;

  margin-bottom: 24px;
`;

export const TextContent = styled.Text<AwardCardProps>`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.XL}px;

  color: ${(props: AwardCardProps) =>
    props.isPlayerShown ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_100};
`;
