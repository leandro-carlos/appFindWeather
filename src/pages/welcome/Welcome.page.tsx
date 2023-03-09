import { StyleSheet, SafeAreaView, Button, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

import Trovoadas from "../../assets/images/Home/Trovoadas.svg";

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "TabStack",
          },
        ],
      })
    );
  }

  return (
    <SafeAreaView>
      <Trovoadas />
    </SafeAreaView>
  );
}
