import React, { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from "@react-native-community/datetimepicker";

export default function Birthday() {
  const [birthday, setBirthday] = useState<string>("unknown");
  const [showIos, setShowIos] = useState(false);

  const onChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) setBirthday(selectedDate.toLocaleDateString());
    if (Platform.OS !== "android") {
      setShowIos(false);
    }
  };

  const showDatepicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: new Date(birthday),
        onChange,
        mode: "date",
        is24Hour: true,
      });
    } else {
      setShowIos(true);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={showDatepicker}
      activeOpacity={0.8}
    >
      <FontAwesome5 name="birthday-cake" size={16} color={"#b1b1b1"}/>
      <View style={{width: 8}}/>
      <Text style={styles.text}>誕生日: {birthday}</Text>
      {Platform.OS !== "android" && showIos && (
        <DateTimePicker
          value={new Date(birthday)}
          mode="date"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: "#b1b1b1",
  },
});
