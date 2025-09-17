// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Navegação em pilha
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Navegação por abas

// Importe todas as suas telas
import LoginPage from './src/pages/Auth/LoginPage';
import ProfilePage from './src/pages/ProfilePage';
import MatchPage from './src/pages/MatchPage';
import ClubPage from './src/pages/ClubPage';
import MatchSuccessPage from './src/pages/MatchSuccessPage'; // Tela de sucesso do Match

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navegador de abas (Home)
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Match" component={MatchPage} />
      <Tab.Screen name="Clube" component={ClubPage} />
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
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}