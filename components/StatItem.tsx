import React, { useEffect, useMemo, useRef } from "react";
import { Animated, StyleSheet, Text, useWindowDimensions, View } from "react-native";

type Props = {
  label: string;
  value: number;
  color: string;
}

export default function StatItem({label, value, color}: Props) {
  const widthAnim = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const space = 8;
  const padding = 20;
  const barUnit = useMemo(() => {
    const flexUnit = (width - padding * 2 - space) / 5;
    const barWidth = flexUnit * 4;
    return barWidth / 200;
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
      <View style={{width: space}}/>
      <View style={styles.statContainer}>
        <Animated.View
          style={[
            styles.statAnimBar,
            {
              backgroundColor: color,
              width: widthAnim,
            },
          ]}
        />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>{value}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
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
  statAnimBar: {
    flex: 4,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 50,
  },
  statValueContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  statValue: {
    color: "#fff",
    fontWeight: "bold",
    marginStart: 8,
  },
});
