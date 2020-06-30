import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import colors from "../assets/colors";

function getPostion(position) {
  switch (position) {
    case "left":
      return { position: "absolute", left: 20, bottom: 20 };
    default:
      return { position: "absolute", right: 20, bottom: 20 };
  }
}

const CustomActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPostion(position) : [];

  return (
    <TouchableOpacity onPress={onPress} style={floatingActionButton}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};

CustomActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

CustomActionButton.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    backgroundColor: colors.bgError,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomActionButton;
