import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function BookCard({ title, author, coverImageUrl }) {
  return (
    <View style={Estilo.card}>
      <Image source={{ uri: coverImageUrl }} style={Estilo.cover} />
      <Text style={Estilo.title} numberOfLines={1}>{title}</Text>
      <Text style={Estilo.author} numberOfLines={1}>{author}</Text>
    </View>
  );
}

const Estilo = StyleSheet.create({
  card: {
    width: 150,
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cover: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  author: {
    fontSize: 12,
    color: 'gray',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
});