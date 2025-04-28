import React, { useState } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

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
      <ThemedView style={iosStyles.container}>
        <AntDesign name="calendar" size={16} color={iconColor} />
        <ThemedView style={{width: 8}}/>
        <ThemedText type="size14Normal">誕生日:</ThemedText>
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
      <TouchableOpacity
        style={[androidStyles.container, {backgroundColor}]}
        onPress={() => setShowAndroid(true)}
        activeOpacity={0.8}
      >
        <AntDesign name="calendar" size={16} color={iconColor} />
        <ThemedView style={{width: 8}}/>
        <ThemedText type="size14Normal">誕生日: {birthdayAndroid}</ThemedText>
        {showAndroid && (
          <DateTimePicker
            value={new Date(birthdayAndroid)}
            maximumDate={new Date()}
            mode="date"
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const iosStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});

const androidStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
});
