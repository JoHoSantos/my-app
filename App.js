import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Teste } from './Component';
import Home from './Home'
import Content from './Content'
import Login from './Pages/Login'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} screenOptions={{headerShow:false}}>
        <Stack.Screen name="Login" options={{headerTitle:()=> <Text>Login</Text>, headerRight: ()=>(
          <Button
          onPress={()=>alert('test')}
          title='Cadastrar-se'
          color='green'
          background={'transparent'}
          style={{ background:'transparent'}}
         
          />
        )}} component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Content" component={Content} />
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