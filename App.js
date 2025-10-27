// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importe todas as suas telas
import LoginPage from './src/pages/Auth/LoginPage';
import ProfilePage from './src/pages/ProfilePage';
import MatchPage from './src/pages/MatchPage';
import ClubPage from './src/pages/ClubPage';
import MatchSuccessPage from './src/pages/MatchSuccessPage'; 
import Chat from './src/pages/Chat';
import AddBookPage from './src/pages/AddBookPage'; // Import já está aqui, ótimo

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navegador de abas (Home)
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Match" component={MatchPage} />
      <Tab.Screen name="Clube" component={ClubPage} />
      {/* Isto está correto, não mude! */}
      <Tab.Screen name="Perfil" component={ProfilePage} /> 
    </Tab.Navigator>
  );
}

// Navegador principal que inclui o Login e a Home
function MainApp() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tela de Login será a primeira */}
      <Stack.Screen 
        name="Login" 
        component={LoginPage} 
        options={{ presentation: 'modal' }} 
      />
      {/* Tela principal com as abas */}
      <Stack.Screen name="MainTabs" component={MainTabs} />
      
      {/* Tela de sucesso do Match */}
      <Stack.Screen 
        name="MatchSuccess" 
        component={MatchSuccessPage} 
        options={{ presentation: 'modal' }} 
      />
      
      {/* Tela de Chat */}
      <Stack.Screen 
        name="Chat" 
        component={Chat}
        options={{ 
          headerShown: true,
          title: 'Chat',
          presentation: 'card'
        }} 
      />

      {/* --- ESTA É A CORREÇÃO --- */}
      {/* Adicione a tela AddBook aqui */}
      <Stack.Screen 
        name="AddBook" 
        component={AddBookPage}
        options={{ 
          headerShown: true, // Mostra o cabeçalho
          title: 'Adicionar Novo Livro', // Define o título
          presentation: 'modal' // Faz deslizar de baixo para cima
        }} 
      />
      {/* ------------------------- */}

    </Stack.Navigator>
  );
}

// NÃO PRECISAMOS MAIS DA ProfileStack()
/* function ProfileStack() {
  return (
    ...
  );
}
*/

export default function App() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}