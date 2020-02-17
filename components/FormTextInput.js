import React from "react";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

const FormTextInput = props => {
  const { style, ...otherProps } = props;
  return <TextInput style={[styles.textInput, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    width:'80%',
    borderRadius:10,
    marginLeft:25,
    paddingLeft:10,
    marginBottom:10,
  }
});

FormTextInput.propTypes = {
  style: PropTypes.object
};

export default FormTextInput;