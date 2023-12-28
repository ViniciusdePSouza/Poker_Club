import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Championship } from "../screens/Championship";
import { Timer } from "../screens/Timer";

import { Icon } from "@rneui/themed";
import theme from "../theme";
import { Platform } from "react-native";
import { Awards } from "../screens/Awards";

type AppRoutesProps = {
  Home: undefined;
  Championship: undefined;
  Timer: undefined;
  Awards: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.YELLOW_700,
        tabBarInactiveTintColor: theme.COLORS.GRAY_300,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GREEN_700,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 84,
          paddingTop: 16,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={36} color={color} />;
          },
        }}
      />
      <Screen
        name="Championship"
        component={Championship}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="trophy" type="entypo" size={36} color={color} />;
          },
        }}
      />
      <Screen
        name="Awards"
        component={Awards}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="attach-money" type="material-icons" size={36} color={color} />;
          },
        }}
      />

      <Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="timer" size={36} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
