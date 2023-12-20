import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import theme from "../theme";

export function Routes() {
  const themeDefault = DefaultTheme;
  themeDefault.colors.background = theme.COLORS.GRAY_400;

  return (
      <NavigationContainer theme={themeDefault}>
        <AppRoutes />
      </NavigationContainer>
  );
}
