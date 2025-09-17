import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity style={[Estilo.button, style]} onPress={onPress}>
      <Text style={[Estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const Estilo = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(102, 209, 255)',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});