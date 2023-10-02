import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Login() {
    return (
        <View>
            <View>
                <View>
                    <TextInput />
                    <TextInput />
                    <Button title="Log In"/>
                </View>
                <Button title="Esqueceu sua senha?"/>
            </View>
        </View>
    );
}