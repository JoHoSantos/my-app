import { StyleSheet, Tex, View, Button } from 'reac-native';
import {userState} from 'react'

export function ComponenteTest({nome}){

    const [data, setData]=useState();

    return(
        <View>
        <Text>{nome}</Text>
        <Button onClick={()=setData(9)}>Clique Aqui</Button>
        </View>
    );
}