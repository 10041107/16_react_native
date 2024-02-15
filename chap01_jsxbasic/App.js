import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="black"/>
      <View>
        <Text style={styles.title}>hello react native</Text>
      </View>
      <View style={styles.ItemContainer}>
        <Text style={styles.item}>jsx를 이용한 컴포넌트 렌더링</Text>
        <Text style={styles.item}>javascript를 이용한 방법보다 수월</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    marginTop:30
  },
  titleContainer:{
    flex:0.2,
    justifyContent:'center',
    backgroundColor:"#99ffcc",
    width:"100%",
    alignItems:"center"
  },
  title:{
    fontSize:30,
    color:"blue"
  },
  ItemContainer:{
    flex:0.8,
    justfyContent:'center',
    backgroundColor:"#99ffff",
    width:"100%",
    alignItems:'center'
  },
  Item{
    backgroundColor:"#99ffff"

  }

})
