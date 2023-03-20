import { ActivityIndicator, View } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RootStackParamList } from "./src/utils/RootParamList";

import Home from "./src/pages/home/Home";
import Search from "./src/pages/Search/Search.page";
import Welcome from "./src/pages/welcome/Welcome.page";
import SelectYourRegion from "./src/pages/selectYourRegion/SelectYourRegio.page";
import FiveDays from "./src/pages/fiveDays/FiveDays";
const StackWelcome = createStackNavigator<RootStackParamList>();
const StackHome = createStackNavigator<RootStackParamList>();
const TabsStack = createMaterialBottomTabNavigator<RootStackParamList>();

import { colors } from "./src/assets/theme/appTheme";
import { useTheme } from "react-native-paper";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";

const screenOptions = {
  headerShown: false,
};

function HomeStack() {
  return (
    <StackHome.Navigator screenOptions={screenOptions}>
      {/* <StackHome.Screen name="SelectYourRegion" component={SelectYourRegion} /> */}
      <StackHome.Screen name="Home" component={Home} />
      <StackHome.Screen name="FiveDays" component={FiveDays} />
    </StackHome.Navigator>
  );
}

export function TabStack() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent";

  return (
    <TabsStack.Navigator
      activeColor="#fff"
      inactiveColor="#6f7072"
      barStyle={{ backgroundColor: colors.background }}
      initialRouteName="Home"
    >
      <TabsStack.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home-outline" color={"#fff"} size={26} />
            ) : (
              <Ionicons name="home-outline" color={"gray"} size={26} />
            ),
        }}
        name="HomeBottom"
        component={HomeStack}
      />
      <TabsStack.Screen
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AntDesign name="search1" color={"#fff"} size={26} />
            ) : (
              <AntDesign name="search1" color={"gray"} size={26} />
            ),
        }}
        name="SearchBottom"
        component={Search}
      />
    </TabsStack.Navigator>
  );
}

function WelcomeStack() {
  return (
    <StackWelcome.Navigator screenOptions={screenOptions}>
      <StackWelcome.Screen name="Welcome" component={Welcome} />
      <StackWelcome.Screen name="TabStack" component={TabStack} />
    </StackWelcome.Navigator>
  );
}

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    overPassRegular: require("./src/assets/fonts/Overpass-Regular.ttf"),
    overpassBold: require("./src/assets/fonts/Overpass-Bold.ttf"),
    overPassMedium: require("./src/assets/fonts/Overpass-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <ActivityIndicator color={"white"} />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <WelcomeStack />
        <StatusBar translucent style="inverted" animated />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
