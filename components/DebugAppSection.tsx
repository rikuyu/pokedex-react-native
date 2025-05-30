import React from "react";
import { DebugTitle } from "@/components/DebugTitle";
import { DebugItem } from "@/components/DebugItem";
import * as Application from 'expo-application';

export default function DebugAppSection() {
  const appName = Application.applicationName;
  const appId = Application.applicationId;
  const versionName = Application.nativeApplicationVersion || "x.y.z";
  const buildNumber = Application.nativeBuildVersion || "abc";

  return (
    <>
      <DebugTitle>
        <DebugTitle.Text>Application</DebugTitle.Text>
      </DebugTitle>
      <DebugItem bordered>
        <DebugItem.Text>{appName}, {appId}, {versionName}({buildNumber})</DebugItem.Text>
      </DebugItem>
    </>
  );
}
