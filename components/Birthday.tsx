import React, { useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

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
      <View style={iosStyles.container}>
        <FontAwesome5 name="birthday-cake" size={16} color={"#b1b1b1"}/>
        <View style={{width: 8}}/>
        <Text style={commonStyles.text}>誕生日:</Text>
        <DateTimePicker
          value={birthdayIos}
          maximumDate={new Date()}
          mode="date"
          onChange={onChange}
          themeVariant="dark"
        />
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={androidStyles.container}
        onPress={() => setShowAndroid(true)}
        activeOpacity={0.8}
      >
        <FontAwesome5 name="birthday-cake" size={16} color={"#b1b1b1"}/>
        <View style={{width: 8}}/>
        <Text style={commonStyles.text}>誕生日: {birthdayAndroid}</Text>
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
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
});

const androidStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
});

const commonStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "#b1b1b1",
  },
});
