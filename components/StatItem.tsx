import React, { useEffect, useMemo } from "react";
import { Animated, Easing, StyleSheet, Text, useAnimatedValue, useWindowDimensions, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type Props = {
  label: string;
  value: number;
  color: string;
}

export default function StatItem({label, value, color}: Props) {
  const scaleAnim = useAnimatedValue(0);
  const {width} = useWindowDimensions();
  const space = 8;
  const padding = 20;
  const barUnit = useMemo(() => {
    const flexUnit = (width - padding * 2 - space) / 5;
    const barWidth = flexUnit * 4;
    return barWidth / 200;
  }, [width]);

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: barUnit * value,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
      delay: 100,
    }).start();
  }, [value, barUnit, scaleAnim]);

  return (
    <View style={styles.container}>
      <ThemedView style={styles.labelContainer}>
        <ThemedText
          type={"size16Medium"}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {label}
        </ThemedText>
      </ThemedView>
      <ThemedView style={{width: 8}}/>
      <ThemedView lightColor={"#e0e8f0"} darkColor={"#464646"} style={styles.statContainer}>
        <Animated.View
          style={[
            styles.statAnimBar,
            {
              backgroundColor: color,
              transform: [{scaleX: scaleAnim}],
              transformOrigin: "left",
            },
          ]}
        />
        <View style={styles.statValueContainer}>
          <Text style={styles.statValue}>{value}</Text>
        </View>
      </ThemedView>
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
  statContainer: {
    flex: 4,
    height: 24,
    borderRadius: 50,
    position: "relative",
    overflow: "hidden",
  },
  statAnimBar: {
    flex: 4,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: 1,
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
