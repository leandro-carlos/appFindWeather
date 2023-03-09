import { Text, StyleSheet, SafeAreaView } from "react-native";

export default function FiveDays() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> FiveDays </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
