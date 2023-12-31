import "react-native-gesture-handler";

import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PlayersProvider } from "./src/hooks/playersContext";
import { TournamentConfigProvider } from "./src/hooks/configureTournamentContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TournamentConfigProvider>
        <PlayersProvider>
          <ThemeProvider theme={theme}>
            <StatusBar
              barStyle={"light-content"}
              backgroundColor={"transparent"}
              translucent
            />
            {fontsLoaded ? <Routes /> : <Loading />}
          </ThemeProvider>
        </PlayersProvider>
      </TournamentConfigProvider>
    </GestureHandlerRootView>
  );
}
