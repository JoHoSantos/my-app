import { statusBar } from 'expo-status-bar';
import { Stylesheet, Text, View, Button } from 'react-native';
import { Teste } from './Component';

export default function App(navigation) {{
    return(
        <View style={style.container}>
            <text>Open up App.js to start working on your app!</text>
            <Teste/>
            <Button title= 'Ir para a tela de conteudo' onPress={()=>{
                navigation.navigate('Content')
            }}/>
            <StatusBar style="auto"/>
        </View>
    )
}}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });