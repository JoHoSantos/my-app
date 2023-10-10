import { StatusBar } from 'expo-status-bar'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Formik } from 'formik'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,ImageBackground } from 'react-native';
import { loginValidationScheme } from "../Validation/Form"
const image = require('../assets/images/capa.jpeg')
export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.containerWrapper}>
        <View style={styles.containerInput}>
          <Input name="Email" type="text" placeholder="Email" />
        </View>
        <View style={styles.containerInput}>
          <Input name="Password" type="password" placeholder="Senha" />
        </View>

        <View style={styles.containerButton}>
          <Button title="Log In" onPress={() => alert('login')} />
        </View>

        <TouchableOpacity style={styles.containerResetPassword} onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.containerResetPasswordLinkContentText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
      </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     gap: 30
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
    paddingTop: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  containerInput: {
    paddingTop: 18,
  },
  containerButton: {
    paddingTop: 18,
    width: '100%',
  },
  containerResetPassword: {
    paddingTop: 18,
    width: '100%',
  },
  containerResetPasswordLinkContentText: {
    textAlign: 'center',
    color: '#C42C2C',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
    image: {
      flex: 1,

    }
})
