import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button'; // Reutilizando seu componente de botão

export default function AddBookPage({ navigation }) {
  // Estados para guardar os dados do formulário
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');

  // Função para lidar com o salvamento
  const handleSaveBook = () => {
    // --- AQUI ENTRARIA A LÓGICA DE SALVAMENTO ---
    // (Por exemplo, enviar para uma API, salvar no AsyncStorage, etc.)
    // 
    // Por enquanto, vamos apenas exibir um alerta e voltar.
    console.log('Novo Livro:', { title, author, coverImageUrl });
    Alert.alert('Sucesso!', 'Seu livro foi adicionado.');

    // Volta para a tela anterior (ProfilePage)
    navigation.goBack(); 
  };

  return (
    <View style={Estilo.container}>
      <Text style={Estilo.headerTitle}>Adicionar Novo Livro</Text>

      {/* Campo de Título */}
      <TextInput
        style={Estilo.input}
        placeholder="Título do Livro"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      {/* Campo de Autor */}
      <TextInput
        style={Estilo.input}
        placeholder="Autor"
        placeholderTextColor="#888"
        value={author}
        onChangeText={setAuthor}
      />

      {/* Campo de URL da Imagem */}
      <TextInput
        style={Estilo.input}
        placeholder="URL da Imagem de Capa (https://...)"
        placeholderTextColor="#888"
        value={coverImageUrl}
        onChangeText={setCoverImageUrl}
        autoCapitalize="none"
      />

      {/* Botão Salvar */}
      <View style={Estilo.buttonContainer}>
        <Button
          title="Salvar Livro"
          onPress={handleSaveBook}
          style={{ backgroundColor: 'rgb(49, 49, 49)' }} // Mesmo estilo do botão anterior
        />
      </View>
    </View>
  );
}

// Estilos para a nova página
const Estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
});