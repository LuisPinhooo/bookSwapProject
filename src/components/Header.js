import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={Estilo.header}>
      <Text style={Estilo.title}>{title}</Text>
    </View>
  );
}

const Estilo = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});