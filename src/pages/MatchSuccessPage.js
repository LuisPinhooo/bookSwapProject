import React from 'react'; // Importa o React para criar componentes
import { View, Text, StyleSheet, Image } from 'react-native'; // Importa componentes básicos do React Native
import Button from '../components/Button'; // Importa o botão customizado

// --- DADOS FALSOS (MOCK) ---
// Dados fictícios do livro do usuário
const yourBook = {
  coverImageUrl: 'https://placehold.co/150x220/333/EEE?text=Seu+Livro',
};

// Dados fictícios do livro combinado
const matchedBook = {
  coverImageUrl: 'https://placehold.co/150x220/333/EEE?text=Livro+Combinado',
};
// -----------------------------

// Componente principal da página de sucesso do Match
export default function MatchSuccessPage({ navigation }) {
  return (
    // Container principal da página
    <View style={Estilo.container}>
      {/* Título da página */}
      <Text style={Estilo.title}>É um Match!</Text>
      {/* Subtítulo explicativo */}
      <Text style={Estilo.subtitle}>
        Você e outro leitor têm interesse em trocar livros.
      </Text>
      
      {/* Container para exibir as capas dos livros */}
      <View style={Estilo.coversContainer}>
        {/* Exibe a capa do livro do usuário */}
        <Image source={{ uri: yourBook.coverImageUrl }} style={[Estilo.cover, Estilo.leftCover]} />
        {/* Exibe a capa do livro combinado */}
        <Image source={{ uri: matchedBook.coverImageUrl }} style={[Estilo.cover, Estilo.rightCover]} />
      </View>

      {/* Container para os botões de ação */}
      <View style={Estilo.buttonContainer}>
        {/* Botão para iniciar uma conversa */}
        <Button 
          title="Iniciar Conversa"
          onPress={() => navigation.navigate('Chat')} // Atualiza a navegação para o Chat
        />
        {/* Botão para continuar navegando */}
        <Button 
          title="Continuar Navegando" 
          onPress={() => navigation.goBack()} // Volta para a tela anterior
          style={Estilo.secondaryButton} // Estilo do botão secundário
          textStyle={Estilo.secondaryButtonText} // Estilo do texto do botão secundário
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
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
    padding: 30, // Espaçamento interno
  },
  // Estilo do título
  title: {
    fontSize: 42, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    color: '#8B4513', // Cor do texto
    marginBottom: 10, // Espaçamento abaixo do título
  },
  // Estilo do subtítulo
  subtitle: {
    fontSize: 18, // Tamanho da fonte
    color: 'gray', // Cor do texto
    textAlign: 'center', // Centraliza o texto
    marginBottom: 40, // Espaçamento abaixo do subtítulo
  },
  // Estilo do container das capas dos livros
  coversContainer: {
    flexDirection: 'row', // Alinha os itens em linha
    position: 'relative', // Permite posicionamento absoluto dos itens
    marginBottom: 50, // Espaçamento abaixo do container
    width: 250, // Largura fixa do container
    height: 250, // Altura fixa do container
    alignItems: 'center', // Centraliza os itens verticalmente
    justifyContent: 'center', // Centraliza os itens horizontalmente
  },
  // Estilo das capas dos livros
  cover: {
    width: 150, // Largura fixa da capa
    height: 220, // Altura fixa da capa
    borderRadius: 8, // Bordas arredondadas
    borderWidth: 3, // Largura da borda
    borderColor: 'white', // Cor da borda
  },
  // Estilo da capa do livro do usuário
  leftCover: {
    transform: [{ rotate: '-15deg' }], // Rotaciona a capa para a esquerda
    position: 'absolute', // Posiciona a capa de forma absoluta
    left: 20, // Distância da borda esquerda
  },
  // Estilo da capa do livro combinado
  rightCover: {
    transform: [{ rotate: '15deg' }], // Rotaciona a capa para a direita
    position: 'absolute', // Posiciona a capa de forma absoluta
    right: 20, // Distância da borda direita
  },
  // Estilo do container dos botões
  buttonContainer: {
    width: '100%', // Largura total
    maxWidth: 300, // Largura máxima
  },
  // Estilo do botão secundário
  secondaryButton: {
    backgroundColor: 'transparent', // Fundo transparente
    marginTop: 10, // Espaçamento acima do botão
  },
  // Estilo do texto do botão secundário
  secondaryButtonText: {
    color: '#8B4513', // Cor do texto
  },
});