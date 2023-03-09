import { ActivityIndicator, View } from "react-native";

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

const screenOptions = {
  headerShown: false,
};

function HomeStack() {
  return (
    <StackHome.Navigator screenOptions={screenOptions}>
      <StackHome.Screen name="SelectYourRegion" component={SelectYourRegion} />
      <StackHome.Screen name="Home" component={Home} />
      <StackHome.Screen name="FiveDays" component={FiveDays} />
    </StackHome.Navigator>
  );
}

export function TabStack() {
  return (
    <TabsStack.Navigator initialRouteName="Home">
      <TabsStack.Screen name="HomeBottom" component={HomeStack} />
      <TabsStack.Screen name="SearchBottom" component={Search} />
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

export default function App() {
  const [fontsLoaded] = useFonts({
    overPassRegular: require("./src/assets/fonts/Overpass-Regular.ttf"),
    overpassBold: require("./src/assets/fonts/Overpass-Bold.ttf"),
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
    <NavigationContainer>
      <WelcomeStack />
    </NavigationContainer>
  );
}
