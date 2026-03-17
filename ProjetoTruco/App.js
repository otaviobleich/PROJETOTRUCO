import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [ponto, setPontos] = useState(10)

  function aumentar(){
    setPontos(ponto + 1)
  }

  function diminuir(){
    setPontos(ponto - 1)
  }

  return (
    <View style={styles.container}>

      <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Unipar_logo.png'}}
        style={styles.logo}
      />

      <Text style={styles.titulo}>MARCADOR</Text>

      <Text style={styles.numero}>{ponto}</Text>

      <View style={styles.botoes}>

        <TouchableOpacity style={styles.botaoMais} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoMenos} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f2f2f2'
  },

  logo:{
    width:120,
    height:60,
    resizeMode:'contain',
    marginBottom:20
  },

  titulo:{
    fontSize:18,
    fontWeight:'bold',
    color:'#666',
    marginBottom:30
  },

  numero:{
    fontSize:60,
    fontWeight:'bold',
    marginBottom:60
  },

  botoes:{
    flexDirection:'row'
  },

  botaoMais:{
    backgroundColor:'#0f5f3d',
    padding:15,
    borderRadius:10,
    marginRight:20,
    width:70,
    alignItems:'center'
  },

  botaoMenos:{
    backgroundColor:'#8b0024',
    padding:15,
    borderRadius:10,
    width:70,
    alignItems:'center'
  },

  textoBotao:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold'
  }

});