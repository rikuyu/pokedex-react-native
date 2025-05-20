import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { i18nText } from "@/utils/i18n";
import { Text, View } from "tamagui";

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
    <View px={20}>
      <Text fos={16}>{i18nText("name")}</Text>
      <View h={12} />
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
      <View h={20} />
      <Text fos={16}>{i18nText("description")}</Text>
      <View h={12} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
});
