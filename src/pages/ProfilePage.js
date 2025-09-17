import React from 'react'; // Importa o React para criar componentes
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'; // Importa componentes básicos do React Native

// Importa os componentes reutilizáveis
import BookCard from '../components/BookCard'; // Componente para exibir os livros
import Button from '../components/Button'; // Componente de botão customizado

// --- DADOS FALSOS (MOCK) ---
// Dados fictícios do usuário
const user = {
  name: 'Ana Clara', // Nome do usuário
  avatarUrl: 'https://i.pravatar.cc/150?u=anaclara', // URL da imagem do avatar
};

// Lista fictícia de livros do usuário
const userBooks = [
  { id: '1', title: 'O Hobbit', author: 'J.R.R. Tolkien', coverImageUrl: 'https://placehold.co/150x200/EEE/333?text=O+Hobbit' },
  { id: '2', title: '1984', author: 'George Orwell', coverImageUrl: 'https://placehold.co/150x200/EEE/333?text=1984' },
  { id: '3', title: 'O Sol é para todos', author: 'Harper Lee', coverImageUrl: 'https://placehold.co/150x200/EEE/333?text=O+Sol' },
  { id: '4', title: 'Duna', author: 'Frank Herbert', coverImageUrl: 'https://placehold.co/150x200/EEE/333?text=Duna' },
];
// -----------------------------

// Componente principal da página de perfil
export default function ProfilePage() {
  return (
    // Container principal da página
    <View style={Estilo.container}>
      {/* Cabeçalho do perfil */}
      <View style={Estilo.profileHeader}>
        {/* Exibe o avatar do usuário */}
        <Image source={{ uri: user.avatarUrl }} style={Estilo.avatar} />
        {/* Exibe o nome do usuário */}
        <Text style={Estilo.userName}>{user.name}</Text>
        {/* Exibe o título do cabeçalho */}
        <Text style={Estilo.headerTitle}>Meus Livros para Troca</Text>
      </View>
      
      {/* Lista de livros do usuário */}
      <FlatList
        data={userBooks} // Dados dos livros
        renderItem={({ item }) => (
          <BookCard 
            title={item.title} // Título do livro
            author={item.author} // Autor do livro
            coverImageUrl={item.coverImageUrl} // URL da capa do livro
          />
        )}
        keyExtractor={item => item.id} // Define a chave única para cada item
        numColumns={2} // Exibe os livros em duas colunas
        contentContainerStyle={Estilo.listContainer} // Estilo do container da lista
      />

      {/* Rodapé com botão para adicionar novo livro */}
      <View style={Estilo.footer}>
        <Button 
          title="+ Adicionar Novo Livro" 
          onPress={() => alert('Abrir tela para adicionar livro!')}// Ação ao clicar no botão
          style={{ backgroundColor: 'rgb(49, 49, 49)' }} 
        />
      </View>
    </View>
  );
}

// Estilos para os componentes da página
const Estilo = StyleSheet.create({
  // Estilo do container principal
  container: {
    flex: 1, // Ocupa toda a altura disponível
    backgroundColor: '#f5f5f5', // Fundo cinza claro
  },
  // Estilo do cabeçalho do perfil
  profileHeader: {
    alignItems: 'center', // Centraliza os itens horizontalmente
    padding: 20, // Espaçamento interno
    backgroundColor: 'white', // Fundo branco
    borderBottomWidth: 1, // Linha separadora na parte inferior
    borderBottomColor: '#ddd', // Cor da linha separadora
  },
  // Estilo do avatar do usuário
  avatar: {
    width: 100, // Largura do avatar
    height: 100, // Altura do avatar
    borderRadius: 50, // Bordas arredondadas para criar um círculo
  },
  // Estilo do nome do usuário
  userName: {
    fontSize: 22, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    marginTop: 10, // Espaçamento acima do nome
  },
  // Estilo do título do cabeçalho
  headerTitle: {
    fontSize: 18, // Tamanho da fonte
    color: 'gray', // Cor do texto
    marginTop: 15, // Espaçamento acima do título
  },
  // Estilo do container da lista de livros
  listContainer: {
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  // Estilo do rodapé
  footer: {
    padding: 20, // Espaçamento interno
    borderTopWidth: 1, // Linha separadora na parte superior
    borderTopColor: '#ddd', // Cor da linha separadora
    backgroundColor: 'white', // Fundo branco
  },
});