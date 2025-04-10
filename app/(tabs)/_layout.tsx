import React from "react";
import { Tabs } from "expo-router";

export default function _Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: "index"}}/>
      <Tabs.Screen name="favorite" options={{title: "favorite"}}/>
      <Tabs.Screen name="mypage" options={{title: "mypage"}}/>
    </Tabs>
  );
}
