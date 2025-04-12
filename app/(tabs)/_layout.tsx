import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
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
        name="bookmark"
        options={{
          title: "",
          tabBarLabel: "",
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name={focused ? "bookmark" : "bookmark-outline"}
              color="white"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "",
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
