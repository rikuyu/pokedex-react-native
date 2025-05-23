import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { headerStyle, tabBarStyle } from "@/constants/colors";
import HapticTabButton from "@/components/HapticTabButton";
import { isIos } from "@/utils/platform";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{tabBarStyle, headerStyle}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarLabel: "",
          tabBarIcon: ({focused}: { focused: boolean }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color="white"
              size={24}
              testID={"home-tab-icon"}
            />
          ),
          tabBarButton: (props) => <HapticTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "",
          tabBarLabel: "",
          tabBarIcon: ({focused}: { focused: boolean }) => (
            <MaterialIcons
              name={focused ? "bookmark" : "bookmark-outline"}
              color="white"
              size={24}
              testID={"bookmark-tab-icon"}
            />
          ),
          tabBarButton: (props) => <HapticTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "",
          tabBarLabel: "",
          headerShown: isIos,
          tabBarIcon: ({focused}: { focused: boolean }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              color="white"
              size={24}
              testID={"mypage-tab-icon"}
            />
          ),
          tabBarButton: (props) => <HapticTabButton {...props} />,
        }}
      />
    </Tabs>
  );
}
