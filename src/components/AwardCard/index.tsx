import { Icon } from "@rneui/themed";
import { Container, TextContent } from "./styles";

export interface AwardCardProps {
  title: string;
  iconName: string;
  iconType?: string;
  content: string;
  color: string;
  isPlayerShown?: boolean;
}

export function AwardCard({
  title,
  iconName,
  iconType = "",
  content,
  color,
  isPlayerShown = false,
}: AwardCardProps) {
  return (
    <Container isPlayerShown={isPlayerShown}>
      <Icon
        name={iconName}
        type={iconType}
        size={40}
        color={color}
      />
      <TextContent isPlayerShown={isPlayerShown}>
        {title}: {content}
      </TextContent>
    </Container>
  );
}
