import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

export default function _Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#ff4545",
        },
        headerStyle: {
          backgroundColor: "#ff4545",
        },
        headerTitle: (props) => <PokemonTitle {...props} />,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color="white"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name={focused ? "favorite" : "favorite-outline"}
              color="white"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              color="white"
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

function PokemonTitle() {
  return (
    <Image
      style={{ width: 36, height: 36, marginBottom: 12 }}
      source={require("../../assets/images/monster_ball.png")}
    />
  );
}
