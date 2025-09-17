import React from 'react'; // Importa o React para criar componentes
import { View, Text, StyleSheet, Image } from 'react-native'; // Importa componentes básicos do React Native
import Swiper from 'react-native-deck-swiper'; // Importa o componente Swiper para criar o efeito de swipe nos cards

// Lista de livros que serão exibidos nos cards do Swiper
const booksToSwipe = [
  { 
    id: '5', 
    title: 'O Nome do Vento', 
    author: 'Patrick Rothfuss', 
    coverImageUrl: 'https://placehold.co/300x450/333/EEE?text=O+Nome+do+Vento' 
  },
  { 
    id: '6', 
    title: 'Flores para Algernon', 
    author: 'Daniel Keyes', 
    coverImageUrl: 'https://placehold.co/300x450/333/EEE?text=Flores+para+Algernon' 
  },
  { 
    id: '7', 
    title: 'O Guia do Mochileiro das Galáxias', 
    author: 'Douglas Adams', 
    coverImageUrl: 'https://placehold.co/300x450/333/EEE?text=Guia+do+Mochileiro' 
  },
  { 
    id: '8', 
    title: 'Fahrenheit 451', 
    author: 'Ray Bradbury', 
    coverImageUrl: 'https://placehold.co/300x450/333/EEE?text=Fahrenheit+451' 
  },
];

// Componente principal da página de Match
export default function MatchPage({ navigation }) {
  return (
    // Container principal da página
    <View style={Estilo.container}>
      {/* Container do Swiper */}
      <View style={Estilo.swiperContainer}>
        {/* Componente Swiper para exibir os cards */}
        <Swiper
          backgroundColor={'#f5f5f5'}
          cards={booksToSwipe} // Lista de livros que serão exibidos
          renderCard={(book) => {
            // Função para renderizar cada card
            return (
              <View style={Estilo.card}>
                {/* Exibe a imagem da capa do livro */}
                <Image source={{ uri: book.coverImageUrl }} style={Estilo.cardImage} />
                {/* Container para os textos do card */}
                <View style={Estilo.textContainer}>
                  {/* Título do livro */}
                  <Text style={Estilo.cardTitle}>{book.title}</Text>
                  {/* Autor do livro */}
                  <Text style={Estilo.cardAuthor}>{book.author}</Text>
                </View>
              </View>
            );
          }}
          // Ação ao deslizar para a direita (match bem-sucedido)
          onSwipedRight={() => navigation.navigate('MatchSuccess')}
          // Ação ao deslizar para a esquerda (descartar)
          onSwipedLeft={() => console.log('Descartou')}
          // Mensagem exibida quando todos os livros forem deslizados
          onSwipedAll={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>Acabaram os livros!</Text>}
          cardIndex={0} // Índice inicial do card
          stackSize={3} // Número de cards empilhados no Swiper
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
    backgroundColor: 'white', // Fundo branco
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
  },
  // Estilo do container do Swiper
  swiperContainer: {
    flex: 1, // Ocupa toda a altura disponível
    justifyContent: 'center', // Centraliza os cards verticalmente
    alignItems: 'center', // Centraliza os cards horizontalmente
    width: '100%', // Ocupa toda a largura disponível
    backgroundColor: 'transparent', // Fundo transparente
  },
  // Estilo dos cards
  card: {
    width: 320, // Largura do card
    height: 470, // Altura do card
    borderRadius: 8, // Bordas arredondadas
    backgroundColor: 'white', // Fundo branco
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Offset da sombra
    shadowOpacity: 0.2, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    alignSelf: 'center', // Centraliza o card dentro do Swiper
  },
  // Estilo da imagem do card
  cardImage: {
    width: '100%', // Largura total do card
    height: '80%', // Ocupa 80% da altura do card
    borderTopLeftRadius: 8, // Bordas arredondadas no topo esquerdo
    borderTopRightRadius: 8, // Bordas arredondadas no topo direito
  },
  // Estilo do container dos textos
  textContainer: {
    padding: 15, // Espaçamento interno
  },
  // Estilo do título do livro
  cardTitle: {
    fontSize: 22, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
  },
  // Estilo do autor do livro
  cardAuthor: {
    fontSize: 16, // Tamanho da fonte
    color: 'gray', // Cor do texto
  },
});