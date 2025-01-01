import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState, useEffect} from 'react'

const MenghitungSkor = () => {
    const [countA, setcountA] = useState(0);
    const [countB, setcountB] = useState(0);
    
      useEffect(() => {
        console.log("component did moment")
        return () =>{
            console.log("component will moment")
        }
      }, []);
    
      useEffect(() => {
        console.log("Skor Tim A Menjadi ", countA)
        console.log("Skor Tim B Menjadi ", countB)
        if ( countA == 10){
          alert("Team A win")
          setcountA(0)
          setcountB(0)
        } else if ( countB == 10){
          alert("Team B win")
          setcountA(0)
          setcountB(0)
        }
      }, [countA,countB])
    
      const dicrementCoutA= () => {
        setcountA(countA +1);
      }
      const incrementCoutA= () => {
        if(countA > 0){
          setcountA(countA - 1);
        }
      }
      const dicrementCoutB = () => {
        setcountB(countB +1);
      }
      const incrementCoutB = () => {
        if ( countB > 0){
          setcountB(countB -1)
        }
      }
    
      const reset = () =>{
        setcountA(0)
        setcountB(0)
      }
  return (
    <View style={styles.container}>
        <View style={styles.containerSkor}>
            <View style={styles.skorBox}>
                <Text style={styles.skor}>{countA}</Text>
                <View style={styles.boxButton}>
                    <Button title=' Tambah ' onPress={dicrementCoutA}/>
                    <Button title=' Kurang ' onPress={incrementCoutA}/>
                </View>
            </View>
            <View style={styles.skorBox}>
                <Text style={styles.skor}>{countB}</Text>
                <View style={styles.boxButton}>
                    <Button title='Tambah' onPress={dicrementCoutB}/>
                    <Button title='Kurang' onPress={incrementCoutB}/>
                </View>
            </View>
        </View>
        <View>
            <Button title=' Reset Skor ' onPress={reset}/>
        </View>
    </View>
  )
}

export default MenghitungSkor

const styles = StyleSheet.create({
    container:{
        gap: 100
    },
    containerSkor:{
        gap: 100,
        flexDirection: 'row',
        margin: 50
    },
    skor:{
        fontSize: 100,
        fontWeight: 'bold'
    },
    boxButton:{
        gap: 20,
    },
    skorBox:{
        alignItems: 'center',
        gap: 20
    }
})