import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, StyleSheet, Text, useWindowDimensions, View } from "react-native";

type Props = {
  label: string;
  value: number;
  color: string;
}

export default function StatItem({label, value, color}: Props) {
  const widthAnim = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const { padding, barUnit } = useMemo(() => {
    const padding = 20;
    const flexUnit = (width - padding * 2) / 5;
    const barWidth = flexUnit * 4;
    const barUnit = barWidth / 150;
    return { padding, barUnit };
  }, [width]);

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: barUnit * value,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [value, barUnit]);

  return (
    <View style={[styles.container, {paddingHorizontal: padding}]}>
      <View style={styles.labelContainer}>
        <Text
          style={styles.label}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </Text>
      </View>
      <View style={{width: 8}}/>
      <View style={styles.statContainer}>
        <Animated.View
          style={[
            styles.statValue,
            {
              backgroundColor: `#${color}`,
              width: widthAnim,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  labelContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  statContainer: {
    flex: 4,
    height: 24,
    backgroundColor: "#e0e8f0",
    borderRadius: 50,
    position: "relative",
  },
  statValue: {
    flex: 4,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 50,
  },
});
