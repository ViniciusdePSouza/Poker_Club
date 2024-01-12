import { Icon } from "@rneui/themed";
import { Container, TextContent } from "./styles";
import theme from "../../theme";

interface AwardCardProps {
  title: string;
  iconName: string;
  iconType?: string;
  content: string;
  color: string;
}

export function AwardCard({
  title,
  iconName,
  iconType = "",
  content,
  color
}: AwardCardProps) {
  return (
    <Container>
      <Icon
        name={iconName}
        type={iconType}
        size={40}
        color={color}
      />
      <TextContent>
        {title}: {content}
      </TextContent>
    </Container>
  );
}
