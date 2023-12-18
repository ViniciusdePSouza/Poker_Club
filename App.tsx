import { ThemeProvider } from "styled-components";
import { SignIn } from "./src/screens/SignIn";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ActivityIndicatorBase } from "react-native";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
     {fontsLoaded ?  <SignIn /> : <Loading/>}
    </ThemeProvider>
  );
}
