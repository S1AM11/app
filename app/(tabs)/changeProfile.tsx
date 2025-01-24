import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";

const ChangeProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");

  // Function to handle submit and log values to the console
  const handleSubmit = () => {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Date of Birth:", dob);
    console.log("Country:", country);
  };

  return (
    <View style={styles.container}>
      {/* Input for First Name */}

      <Text>change profile</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />

      {/* Input for Last Name */}
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />

      {/* Input for Date of Birth */}
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your date of birth (YYYY-MM-DD)"
        value={dob}
        onChangeText={(text) => setDob(text)}
      />

      {/* Input for Country */}
      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your country"
        value={country}
        onChangeText={(text) => setCountry(text)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default ChangeProfile;
