import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {ViewComponent} from './01_basicComponent/01_ViewComponent'
import ImageComponent from './01_basicComponent/04_ImageComponent';
import TextComponent from './01_basicComponent/02_TextComponent'
import TextInputComponent from './01_basicComponent/03_TextInputComponent'

export default function App() {

  const [name, setName] = useState();


  return (

    <ScrollViewComponent>

      <View style = {styles.container}>
        <ViewComponent isTrue={true} style={styles.ViewComponent}/>
        <TextInputComponent onChangeHandler={onChangeHandler} name={name} styles={styles.TextInputComponent}/>
        <TextComponent name={name} styles={styles.textComponent}/>
        <ImageComponent isTrue={true} styles={styles}/>
      </View>
            
    </ScrollViewComponent>
  );
}


const onChangeHandler = (name) =>{
  setName(name);

}



const styles = StyleSheet.create({
scrollContainer:{
  flex:1
},
  container: {
    flex: 1,
    backgroundColor: '#ffff99',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  ViewComponent:{
    alignItems:'center',
    backgroundColor:"yellow",
    marginVertical:2,
    borderWidth:1,
    marginHorizontal:4,
    width:"80%"
  },
  textInputComponent:{
    borderColor:'black',
    borderRadius:3,
    fontSize:15,
    borderWidth:1,
    marginHorizontal:4,
    marginVertical:3,
    paddingHorizontal:4,
    width:"80%"
  },
  textComponent:{
    marginHorizontal:4,
    borderWidth:1,
    paddingHorizontal:3,
    marginVertical:3,
    fontSize:20,
    width: "80%"
  },
  ImageComponent:{
    height:300,
    marginTop:20,
    borderRadius:10,
    width: "80%"
  }
});
