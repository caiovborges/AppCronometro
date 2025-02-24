import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

let timer: number | null = null;
let ss: number
let mm: number
let hh: number
ss = 0
mm = 0
hh = 0
function App(){
  const [numero, setNumero] = useState('00:00:00'); 
  const [botao, setBotao] = useState("Iniciar");
  const [ultimo, setUltimo] = useState<string>('');
  function iniciar(){
    if(timer !== null ){
      clearInterval(timer);
      timer = null;
      setBotao("Continuar");
      
    }else{
      timer = setInterval(() => {
        ss++;
        if(ss == 60){
          ss = 0;
          mm++;
        }
        if(mm == 60){
          mm = 0;
          hh++
        }
        let formate : string
        formate = `${(hh < 10 ? `0${hh}` : hh)}:${(mm < 10 ? `0${mm}` : mm)}:${(ss < 10 ? `0${ss}` : ss)}`
        setNumero(formate);
        
      }, 1000);
      setBotao("Pausar");
      
    }

  }
  function zerar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }
    setUltimo(numero)
    setNumero("00:00:00");
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao("Iniciar");
  }
  return(
    <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}>{numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>
            {botao}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={zerar}>
          <Text style={styles.btnTexto}>
            Zerar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltima}>
        <Text style={styles.ultimaCorrida}>{ultimo ? `Ultimo tempo: ${ultimo}`: ""}</Text>

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aeef"
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: "bold",
    color:"#FFF"
  },
  btnArea:{
    flexDirection: "row",
    marginTop: 130,
    height: 40

  },
  btn:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFF",
    height: 40,
    margin: 17,
    borderRadius: 9

  },
  btnTexto:{

    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef"

  },
  areaUltima:{
    marginTop: 40,
  },
  ultimaCorrida:{
    fontSize:23,
    color:"#FFF",
    fontStyle:"italic"
  }
})
  
export default App;

