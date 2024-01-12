import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Championship } from "../screens/Championship";
import { Timer } from "../screens/Timer";

import { Icon } from "@rneui/themed";
import theme from "../theme";
import { Platform } from "react-native";
import { Awards } from "../screens/Awards";
import { TournamentConfig } from "../screens/TournmentConfig";

type AppRoutesProps = {
  Home: undefined;
  Championship: undefined;
  Timer: undefined;
  Awards: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutesProps>;

const Tab = createBottomTabNavigator<AppRoutesProps>();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.YELLOW_700,
        tabBarInactiveTintColor: theme.COLORS.GRAY_300,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GREEN_700,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 62 : 84,
          paddingTop: Platform.OS === "android" ? 8 : 16,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="home" size={36} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Championship"
        component={Championship}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="users" type="entypo" size={32} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Awards"
        component={Awards}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Icon
                name="attach-money"
                type="material-icons"
                size={36}
                color={color}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="timer" size={36} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Config" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Config" component={TournamentConfig} />
      <Stack.Screen name="HomeStack" component={MainTabs} />
    </Stack.Navigator>
  );
}
