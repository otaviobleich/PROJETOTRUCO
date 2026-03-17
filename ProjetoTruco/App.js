import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [nos, setNos] = useState(0)
  const [eles, setEles] = useState(0)

  function aumentarNos(){ setNos(nos + 1) }
  function diminuirNos(){ 
    if
    (nos > 0){
      setNos(nos - 1)
    }
  }

  function aumentarEles(){ setEles(eles + 1) }
  function diminuirEles(){ 
    if(eles > 0){
setEles(eles - 1) 
    }
    
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/download-removebg-preview.png')}
      />

      <View style={styles.placar}>

        {/* NÓS */}
        <View style={styles.time}>
          <Text style={styles.titulo}>Nois</Text>
          <Text style={styles.numero}>{nos}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoMais} onPress={aumentarNos}>
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMenos} onPress={diminuirNos}>
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>

          {/* BOTÕES EXTRAS */}
          <TouchableOpacity style={styles.truco}><Text style={styles.txt}>TRUCO</Text></TouchableOpacity>
          <TouchableOpacity style={styles.seis}><Text style={styles.txt}>SEISSS</Text></TouchableOpacity>
          <TouchableOpacity style={styles.nove}><Text style={styles.txt}>NOVEEE</Text></TouchableOpacity>
          <TouchableOpacity style={styles.doze}><Text style={styles.txt}>DOZI</Text></TouchableOpacity>
        </View>

        {/* ELES */}
        <View style={styles.time}>
          <Text style={styles.titulo}>Eles</Text>
          <Text style={styles.numero}>{eles}</Text>

          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoMais} onPress={aumentarEles}>
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoMenos} onPress={diminuirEles}>
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>

          {/* BOTÕES EXTRAS */}
          <TouchableOpacity style={styles.truco}><Text style={styles.txt}>TRUCO</Text></TouchableOpacity>
          <TouchableOpacity style={styles.seis}><Text style={styles.txt}>SEISSS</Text></TouchableOpacity>
          <TouchableOpacity style={styles.nove}><Text style={styles.txt}>NOVEEE</Text></TouchableOpacity>
          <TouchableOpacity style={styles.doze}><Text style={styles.txt}>DOZI</Text></TouchableOpacity>
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
    marginBottom:20
  },

  placar:{
    flexDirection:'row'
  },

  time:{
    alignItems:'center',
    marginHorizontal:15
  },

  titulo:{
    fontSize:20,
    fontWeight: 'regular',
    color:'#000000'
  },

  numero:{
    fontSize:60,
    fontWeight:'bold',
    marginVertical:10
  },

  botoes:{
    flexDirection:'row',
    marginBottom:10
  },

  botaoMais:{
    backgroundColor:'#08ee1b',
    padding:10,
    borderRadius:10,
    marginRight:10,
    width:50,
    alignItems:'center'
  },

  botaoMenos:{
    backgroundColor:'#ff0000',
    padding:10,
    borderRadius:10,
    width:50,
    alignItems:'center'
  },

  textoBotao:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },

  /* BOTÕES GRANDES */
  truco:{
    backgroundColor:'#58b14c',
    width:120,
    padding:10,
    borderRadius:10,
    marginBottom:8,
    alignItems:'center'
  },

  seis:{
    backgroundColor:'#1f3c88',
    width:120,
    padding:10,
    borderRadius:10,
    marginBottom:8,
    alignItems:'center'
  },

  nove:{
    backgroundColor:'#16b5d1',
    width:120,
    padding:10,
    borderRadius:10,
    marginBottom:8,
    alignItems:'center'
  },

  doze:{
    backgroundColor:'#7f0000',
    width:120,
    padding:10,
    borderRadius:10,
    alignItems:'center'
  },

  txt:{
    color:'#fff',
    fontWeight:'bold'
  }

});