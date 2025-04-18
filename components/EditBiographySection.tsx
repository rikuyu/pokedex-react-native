import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  name: string,
  setName: (name: string) => void,
  description: string,
  setDescription: (description: string) => void,
}

export default function EditBiographySection(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name</Text>
      <View style={{height: 12}}/>
      <TextInput
        style={styles.textInput}
        onChangeText={props.setName}
        inputMode={"text"}
        value={props.name}
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
        onChangeText={props.setDescription}
        inputMode={"text"}
        value={props.description}
        placeholder={"Enter Your Description"}
        placeholderTextColor={"#b1b1b1"}
        selectionColor={"#fff"}
        multiline={true}
        maxLength={200}
      />
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
