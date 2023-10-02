import { StyleSheet, Text, View, Button} from 'react-native';
import {useState, useEffect} from 'react'

export function ComponenteTest({nome}){

    const [data, setData]=useState(0);
    
    useEffect(()=>{
        return ()=>{
            alert('alerta')

        }
    },[data])

    return(
        <View>
            <Text>{nome} {data}</Text>
            <Button onPress={()=>setData(data +1)} title='clique aqui'/>
        </View>
    );
}