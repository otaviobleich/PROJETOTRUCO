import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [nos, setNos] = useState(10)
  const [eles, setEles] = useState(10)

  function aumentarNos(){
    setNos(nos + 1)
  }

  function diminuirNos(){
    setNos(nos - 1)
  }

  function aumentarEles(){
    setEles(eles + 1)
  }

  function diminuirEles(){
    setEles(eles - 1)
  }

  return (
    <View style={styles.container}>

      <Image
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/5/5e/Unipar_logo.png'}}
        style={styles.logo}
      />

      <View style={styles.placar}>

        {/* NÓS */}
        <View style={styles.time}>
          <Text style={styles.titulo}>NÓS</Text>
          <Text style={styles.numero}>{nos}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoMais} onPress={aumentarNos}>
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMenos} onPress={diminuirNos}>
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ELES */}
        <View style={styles.time}>
          <Text style={styles.titulo}>ELES</Text>
          <Text style={styles.numero}>{eles}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoMais} onPress={aumentarEles}>
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMenos} onPress={diminuirEles}>
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

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
    marginBottom:40
  },

  placar:{
    flexDirection:'row'
  },

  time:{
    alignItems:'center',
    marginHorizontal:20
  },

  titulo:{
    fontSize:18,
    fontWeight:'bold',
    color:'#666'
  },

  numero:{
    fontSize:60,
    fontWeight:'bold',
    marginVertical:20
  },

  botoes:{
    flexDirection:'row'
  },

  botaoMais:{
    backgroundColor:'#0f5f3d',
    padding:15,
    borderRadius:10,
    marginRight:10,
    width:60,
    alignItems:'center'
  },

  botaoMenos:{
    backgroundColor:'#8b0024',
    padding:15,
    borderRadius:10,
    width:60,
    alignItems:'center'
  },

  textoBotao:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold'
  }

});