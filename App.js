import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Teste } from './Component'
import Home from './Home';
import Content from './content'

const Stack= createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" Component={Home} />
        <Stack.Screen name="Content" Component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  