import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "@/components/ThemedText";
import { i18nText } from "@/utils/i18n";

type Props = {
  name: string,
  setName: (name: string) => void,
  description: string,
  setDescription: (description: string) => void,
}

export default function EditBiographySection(props: Props) {
  const textInputBackground = useThemeColor({light: "#e8f2ff", dark: "#363636"});
  const textColor = useThemeColor(undefined, "text");

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="size16Normal">{i18nText("name")}</ThemedText>
      <ThemedView style={{height: 12}}/>
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: textInputBackground,
            borderColor: textColor,
            color: textColor,
          },
        ]}
        onChangeText={props.setName}
        inputMode={"text"}
        value={props.name}
        placeholder={"Enter Your Name"}
        selectionColor={textColor}
      />
      <ThemedView style={{height: 20}}/>
      <ThemedText type="size16Normal">{i18nText("description")}</ThemedText>
      <ThemedView style={{height: 12}}/>
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: textInputBackground,
            textAlignVertical: "top",
            borderColor: textColor,
            color: textColor,
            height: 80,
          },
        ]}
        onChangeText={props.setDescription}
        inputMode={"text"}
        value={props.description}
        placeholder={"Enter Your Description"}
        selectionColor={textColor}
        multiline={true}
        maxLength={200}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});
