import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-web';
import Input from '../components/Input';

export default function Chat(){
    return(
        <View style={Estilo.container}>
            <ScrollView style={Estilo.chatContainer}>
                {/* Mensagem do usuário 1 */}
                <View style={Estilo.messageRight}>
                    <Text style={Estilo.messageText}>Olá! Vi que você tem o livro que procuro.</Text>
                    <Text style={Estilo.timeText}>10:30</Text>
                </View>

                {/* Mensagem do usuário 2 */}
                <View style={Estilo.messageLeft}>
                    <Text style={Estilo.messageText}>Oi! Sim, tenho interesse em fazer uma troca.</Text>
                    <Text style={Estilo.timeText}>10:32</Text>
                </View>

                {/* Mais mensagens do usuário 1 */}
                <View style={Estilo.messageRight}>
                    <Text style={Estilo.messageText}>Ótimo! Podemos combinar um local para troca?</Text>
                    <Text style={Estilo.timeText}>10:33</Text>
                </View>
            </ScrollView>

            <View style={Estilo.inputContainer}>
                <Input 
                    placeholder="Digite aqui..."
                    style={Estilo.input}
                />
            </View>
        </View>
    )
}

const Estilo = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    chatContainer: {
        flex: 1,
        padding: 10,
        marginBottom: 60, // Espaço para a caixa de texto
    },
    messageRight: {
        backgroundColor: '#DCF8C6',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginLeft: 50,
        marginRight: 10,
        alignSelf: 'flex-end'
    },
    messageLeft: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        marginRight: 50,
        marginLeft: 10,
        alignSelf: 'flex-start'
    },
    messageText: {
        fontSize: 16,
        color: '#000000'
    },
    timeText: {
        fontSize: 12,
        color: '#666666',
        alignSelf: 'flex-end',
        marginTop: 5
    },
    textBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    input: {
        width: '100%',
    }
})