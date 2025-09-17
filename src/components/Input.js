import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder, value, onChangeText, secureTextEntry = false }) {
  return (
    <TextInput
      style={Estilo.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#A9A9A9"
    />
  );
}

const Estilo = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    marginBottom: 15,
  },
});