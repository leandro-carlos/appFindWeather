import { Text, StyleSheet, SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> home </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
