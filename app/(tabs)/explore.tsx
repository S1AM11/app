import { StyleSheet, Image, Platform } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const TabTwoScreen = () => {
  return (
    <ThemedView>
      <ThemedText> this is explore page</ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
export default TabTwoScreen;
