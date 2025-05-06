import React, { useState } from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { i18nText } from "@/utils/i18n";

export default function Birthday() {
  const iconColor = useThemeColor(undefined, "text");
  const [birthdayIos, setBirthdayIos] = useState<Date>(new Date());
  const [birthdayAndroid, setBirthdayAndroid] = useState<string>("unknown");
  const [showAndroid, setShowAndroid] = useState(false);

  const backgroundColor = useThemeColor(undefined, "background");

  const onChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      selectedDate && setBirthdayAndroid(selectedDate.toLocaleDateString());
      setShowAndroid(false);
    }
    if (Platform.OS === "ios") {
      selectedDate && setBirthdayIos(selectedDate);
    }
  };

  if (Platform.OS === "ios") {
    return (
      <ThemedView style={styles.container}>
        <AntDesign name="calendar" size={16} color={iconColor}/>
        <ThemedView style={{width: 6}}/>
        <ThemedText type="size14Normal">{`${i18nText("birthDay")}:`}</ThemedText>
        <DateTimePicker
          value={birthdayIos}
          maximumDate={new Date()}
          mode="date"
          onChange={onChange}
          themeVariant="dark"
        />
      </ThemedView>
    );
  } else {
    return (
      <Pressable
        onPress={() => setShowAndroid(true)}
        style={({pressed}) => [
          styles.container, {
            backgroundColor,
            opacity: pressed ? 0.8 : 1,
          },
        ]}
      >
        <AntDesign name="calendar" size={16} color={iconColor}/>
        <ThemedView style={{width: 8}}/>
        <ThemedText type="size14Normal">{`${i18nText("birthDay")}: ${birthdayAndroid}`}</ThemedText>
        {showAndroid && (
          <DateTimePicker
            value={new Date(birthdayAndroid)}
            maximumDate={new Date()}
            mode="date"
            onChange={onChange}
          />
        )}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});
