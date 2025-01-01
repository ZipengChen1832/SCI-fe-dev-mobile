import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoaderProps = {
  size?: "small" | "large";
  color?: string;
  label?: string;
};

const Loader = ({ size = "large", color = "#007bff", label }: LoaderProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.messageText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  messageText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    padding: 16,
  },
});

export default Loader;
