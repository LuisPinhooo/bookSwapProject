import React from 'react'; // Importa o React para criar componentes
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'; // Importa componentes básicos do React Native
import { Ionicons } from '@expo/vector-icons'; // Importa ícones do Expo

import Button from '../components/Button'; // Importa o componente de botão customizado

// --- DADOS FALSOS (MOCK) ---
// Array de clubes do livro com informações fictícias
const clubs = [
  {
    id: 1,
    bookTitle: 'Fahrenheit 451', // Título do livro
    author: 'Ray Bradbury', // Autor do livro
    coverImageUrl: 'https://placehold.co/300x450/333/EEE?text=Fahrenheit+451', // URL da imagem da capa
    date: '25 de Outubro de 2025', // Data do clube
    time: '18:30', // Horário do clube
    location: 'Biblioteca Central - Sala 3B', // Local do clube
    currentParticipants: 7, // Número atual de participantes
    maxParticipants: 10, // Número máximo de participantes
  },
  {
    id: 2,
    bookTitle: '1984', // Título do livro
    author: 'George Orwell', // Autor do livro
    coverImageUrl: 'https://placehold.co/300x450/333/EEE?text=1984', // URL da imagem da capa
    date: '30 de Outubro de 2025', // Data do clube
    time: '19:00', // Horário do clube
    location: 'Biblioteca Central - Sala 2A', // Local do clube
    currentParticipants: 5, // Número atual de participantes
    maxParticipants: 12, // Número máximo de participantes
  },
];
// -----------------------------

// Componente principal da página de clubes
export default function ClubPage() {
  return (
    // Container principal da página
    <ScrollView contentContainerStyle={Estilo.container}>
      {/* Itera sobre o array de clubes e renderiza cada um */}
      {clubs.map((club) => (
        <View key={club.id} style={Estilo.card}>
          {/* Exibe a imagem da capa do livro */}
          <Image source={{ uri: club.coverImageUrl }} style={Estilo.coverImage} />

          {/* Container para os detalhes do clube */}
          <View style={Estilo.detailsContainer}>
            {/* Exibe o título do livro */}
            <Text style={Estilo.bookTitle}>{club.bookTitle}</Text>
            {/* Exibe o autor do livro */}
            <Text style={Estilo.author}>{club.author}</Text>

            {/* Exibe a data do clube */}
            <View style={Estilo.infoRow}>
              <Ionicons name="calendar-outline" size={20} color="#555" />
              <Text style={Estilo.infoText}>{club.date}</Text>
            </View>

            {/* Exibe o horário do clube */}
            <View style={Estilo.infoRow}>
              <Ionicons name="time-outline" size={20} color="#555" />
              <Text style={Estilo.infoText}>{club.time}</Text>
            </View>

            {/* Exibe o local do clube */}
            <View style={Estilo.infoRow}>
              <Ionicons name="location-outline" size={20} color="#555" />
              <Text style={Estilo.infoText}>{club.location}</Text>
            </View>

            {/* Separador visual */}
            <View style={Estilo.separator} />

            {/* Exibe o número de participantes */}
            <View style={Estilo.participantsContainer}>
              <Text style={Estilo.participantsTitle}>Participantes:</Text>
              <Text style={Estilo.participantsCounter}>
                {club.currentParticipants} / {club.maxParticipants}
              </Text>
            </View>

            {/* Botão para participar do clube */}
            <Button 
              title="Participar do Clube" 
              onPress={() => alert(`Inscrição confirmada para o clube: ${club.bookTitle}`)} 
              style={{ backgroundColor: 'rgb(49, 49, 49)' }} 
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

// Estilos para os componentes da página
const Estilo = StyleSheet.create({
  // Estilo do container principal
  container: {
    flexGrow: 1, // Permite que o conteúdo cresça
    backgroundColor: '#f5f5f5', // Fundo cinza claro
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
    padding: 20, // Espaçamento interno
  },
  // Estilo do card de cada clube
  card: {
    width: '100%', // Largura total
    maxWidth: 500, // Largura máxima
    backgroundColor: 'white', // Fundo branco
    borderRadius: 12, // Bordas arredondadas
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Offset da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    overflow: 'hidden', // Garante que a imagem não ultrapasse as bordas
    marginBottom: 20, // Espaçamento entre os cards
  },
  // Estilo da imagem da capa
  coverImage: {
    width: '100%', // Largura total
    height: 200, // Altura fixa
  },
  // Estilo do container de detalhes
  detailsContainer: {
    padding: 20, // Espaçamento interno
  },
  // Estilo do título do livro
  bookTitle: {
    fontSize: 26, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    marginBottom: 5, // Espaçamento abaixo do título
  },
  // Estilo do autor do livro
  author: {
    fontSize: 16, // Tamanho da fonte
    color: 'gray', // Cor do texto
    marginBottom: 20, // Espaçamento abaixo do autor
  },
  // Estilo das linhas de informações
  infoRow: {
    flexDirection: 'row', // Alinha os itens em linha
    alignItems: 'center', // Centraliza os itens verticalmente
    marginBottom: 10, // Espaçamento abaixo da linha
  },
  // Estilo do texto das informações
  infoText: {
    marginLeft: 10, // Espaçamento à esquerda do ícone
    fontSize: 16, // Tamanho da fonte
  },
  // Estilo do separador visual
  separator: {
    height: 1, // Altura do separador
    backgroundColor: '#eee', // Cor do separador
    marginVertical: 20, // Espaçamento acima e abaixo
  },
  // Estilo do container de participantes
  participantsContainer: {
    alignItems: 'center', // Centraliza os itens horizontalmente
    marginBottom: 20, // Espaçamento abaixo do container
  },
  // Estilo do título de participantes
  participantsTitle: {
    fontSize: 18, // Tamanho da fonte
    color: 'gray', // Cor do texto
  },
  // Estilo do contador de participantes
  participantsCounter: {
    fontSize: 28, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    color: '#8B4513', // Cor primária do app
  },
});