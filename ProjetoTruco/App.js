      import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


//Etapa 1


export default function App() {
  const[ponto, setPontos]= useState(0)

  function aumentar(){
    setPontos(ponto+1)
  }

  function diminuir(){
    setPontos(pontos-1)
  }

return (
    <View style={styles.container}> 

      <Text style={style.titulo}>Marcador</Text>
      <Text style={style.numero}>Pontos</Text>
      <Button title='+' onPress={aumentar}/>
      <Button title='-' onPress={diminuir}/>
      
    </View>


)

}

const style = StyleSheet.create({

 titulo:{
  fontSize:30,
  marginBottom:20
 },

 numero:{
  fontSize:30,
  marginBottom:20
 }

})