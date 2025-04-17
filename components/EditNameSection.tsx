import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function EditNameSection() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name</Text>
      <View style={{height: 12}}/>
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        inputMode={"text"}
        value={name}
        placeholder={"Enter Your Name"}
        placeholderTextColor={"#b1b1b1"}
        selectionColor={"#fff"}
      />
      <View style={{height: 20}}/>
      <Text style={styles.name}>Description</Text>
      <View style={{height: 12}}/>
      <TextInput
        style={[
          styles.textInput,
          {
            textAlignVertical: "top",
            height: 80,
          },
        ]}
        onChangeText={setDescription}
        inputMode={"text"}
        value={description}
        placeholder={"Enter Your Description"}
        placeholderTextColor={"#b1b1b1"}
        selectionColor={"#fff"}
        multiline={true}
        maxLength={200}
      />
      <View style={{height: 12}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    backgroundColor: "#363636",
    borderColor: "#b1b1b1",
    color: "#ffffff",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});
