import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, StatusBar } from 'react-native';


export function Loguin(){
    return(
            <View>
                <View>
                    <Text>Login</Text>
                    <Button title="Cadastre-se"/>
                </View>
                <View>
                    <View>
                        <TextInput />
                        <TextInput />
                        <Button title="Log In" />
                    </View>
                    <Button title="Esqueceu sua senha?" />
                </View>
            </View>
    );
}