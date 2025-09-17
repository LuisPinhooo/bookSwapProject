import React from 'react'; // Importa o React para criar componentes
import { View, Text, StyleSheet, Image } from 'react-native'; // Importa componentes básicos do React Native
import Button from '../../components/Button'; // Importa o componente de botão customizado
import Input from '../../components/Input'; // Importa o componente de entrada de texto
import logo from '../../assets/images/logo.png'; // Importa a imagem do logo

// Componente principal da página de login
export default function LoginPage({ navigation }) {
  return (
    // Container principal da página
    <View style={Estilo.container}>
      {/* Card central que contém o conteúdo da página */}
      <View style={Estilo.card}>
        {/* Exibe o logo do aplicativo */}
        <Image 
          source={logo} 
          style={Estilo.logo}
        />
        {/* Título da página */}
        <Text style={Estilo.title}>Bem-vindo ao BookSwap</Text>
        {/* Container para os campos de entrada */}
        <View style={Estilo.inputContainer}>
          {/* Campo de entrada para o e-mail */}
          <Input placeholder="E-mail" />
          {/* Campo de entrada para a senha */}
          <Input placeholder="Senha" secureTextEntry={true} />
        </View>
        {/* Botão para entrar no aplicativo */}
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('MainTabs')} // Navega para a tela principal (MainTabs)
          style={{ backgroundColor: 'rgb(49, 49, 49)' }} // Estilo do botão
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
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
    backgroundColor: 'rgb(255, 255, 255)', // Fundo branco
  },
  // Estilo do card central
  card: {
    width: '85%', // Largura do card
    maxWidth: 400, // Largura máxima do card
    alignItems: 'center', // Centraliza os itens dentro do card
    padding: 20, // Espaçamento interno
    backgroundColor: 'rgb(206, 206, 206)', // Fundo cinza claro
    borderRadius: 12, // Bordas arredondadas
  },
  // Estilo do logo
  logo: {
    width: 240, // Largura do logo
    height: 240, // Altura do logo
    resizeMode: 'contain', // Ajusta o tamanho da imagem sem distorção
  },
  // Estilo do título
  title: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    color: 'rgb(49, 49, 49)', // Cor do texto
    marginBottom: 25, // Espaçamento abaixo do título
    textAlign: 'center', // Centraliza o texto
  },
  // Estilo do container dos campos de entrada
  inputContainer: {
    width: '100%', // Largura total do container
    marginBottom: 20, // Espaçamento abaixo do container
  },
});