import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const HomePage = () => {
  const navigation = useNavigation();

  // Function to navigate to the Community Forum tab
  const handleNavigateToForum = (value: string) => {
    navigation.navigate(value); // Replace with the exact tab name
  };

  return (
    <ThemedView style={styles.container}>
      {/* Row-wise Text */}
      <ThemedText>HomePage</ThemedText>
      <Image></Image>
      <View>
        <ThemedText style={styles.text}>Dictionary</ThemedText>
        <ThemedText
          style={styles.text}
          onPress={() => handleNavigateToForum("homeScreen")}
        >
          Community Forum
        </ThemedText>
        <ThemedText
          style={styles.text}
          onPress={() => handleNavigateToForum("quizzes")}
        >
          Quizzes
        </ThemedText>
        <ThemedText
          style={styles.text}
          onPress={() => handleNavigateToForum("gamification")}
        >
          Gamification
        </ThemedText>
        <ThemedText
          style={styles.text}
          onPress={() => handleNavigateToForum("changePage")}
        >
          ChangePage
        </ThemedText>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>Learn More</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ThemedText style={styles.buttonText}>About Us</ThemedText>
        </TouchableOpacity>
      </View>

      {/* Community Forum Link */}
      <TouchableOpacity style={styles.link} onPress={handleNavigateToForum}>
        <ThemedText style={styles.linkText}>Go to Community Forum</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  //   row: {
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     justifyContent: "space-between",
  //     marginVertical: 20,
  //   },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    cursor: "pointer",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  link: {
    marginVertical: 20,
  },
  linkText: {
    fontSize: 16,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});
export default HomePage;
