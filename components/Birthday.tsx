import React, { useState } from "react";
import { Platform } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { i18nText } from "@/utils/i18n";
import { CalendarDays } from "@tamagui/lucide-icons";
import { Text, View, XStack } from "tamagui";

export default function Birthday() {
  const [birthdayIos, setBirthdayIos] = useState<Date>(new Date());
  const [birthdayAndroid, setBirthdayAndroid] = useState<string>("unknown");
  const [showAndroid, setShowAndroid] = useState(false);

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
      <XStack px={18} ai={"center"}>
        <CalendarDays size={18} strokeWidth={2}/>
        <View w={6}/>
        <Text fos={14} fow={"normal"}>{`${i18nText("birthDay")}:`}</Text>
        <DateTimePicker
          value={birthdayIos}
          maximumDate={new Date()}
          mode="date"
          onChange={onChange}
          themeVariant="dark"
        />
      </XStack>
    );
  } else {
    return (
      <XStack
        onPress={() => setShowAndroid(true)}
        pressStyle={{o: 0.8}}
        ai={"center"}
        px={18}
      >
        <CalendarDays size={18} strokeWidth={2}/>
        <View w={6}/>
        <Text fos={14} fow={"normal"}>{`${i18nText("birthDay")}: ${birthdayAndroid}`}</Text>
        {showAndroid && (
          <DateTimePicker
            value={new Date(birthdayAndroid)}
            maximumDate={new Date()}
            mode="date"
            onChange={onChange}
          />
        )}
      </XStack>
    );
  }
}
