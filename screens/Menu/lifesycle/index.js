import { Button, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'

const Lifecycle = () => {
    const [count, setcount] = useState(0);

    useEffect(() => {
        console.log("component did moment")
        return () =>{
            console.log("component will moment")
        }
    }, []);

    useEffect(() => {
        console.log("component did Update: count berubah menjadi ", count)
    }, [count])

    const changeCout = () => {
        setcount(count +1);
    }
  return (
    <View style= {{padding:20}}>
      <Text style= {{fontSize: 18, fontWeight: "bold"}}>
        Life Cycle component
      </Text>
      <Button title='update Count' onPress={changeCout}/>
      <Text style={{ fontSize: 16, marginTop: 10}}>
        count : {count}
      </Text>
    </View>
  )
}

export default Lifecycle
