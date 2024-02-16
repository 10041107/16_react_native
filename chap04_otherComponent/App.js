import React, { useState } from 'react';
import { Button, Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import ActivityIndicatorComponent from './01_otherComponent/01_ActivityIndicatorComponent';
import SafeAreaViewComponent from './01_otherComponent/02_SafeAreaView';
import SwitchComponent from './01_otherComponent/03_SwitchComponent';
import FlatListComponent from './01_otherComponent/04_FlatList';
import ModalComponent from './01_otherComponent/07_Modal_Component';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [modalVisiable, setModalVisiable] = useState(false);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicatorComponent />
        <View style={{ marginTop: 5 }}>
          <Button title='로딩완료' onPress={() => setLoading(false)} />
        </View>
        <View style={styles.rootContainer}>
          <FlatListComponent isDark={isDark}/>



        </View>
        <ModalComponent modalVisible={modalVisiable} setModalVisible={setModalVisiable}/>
        <Button title='모달' 
      </View>
    );
  }

  return (
    <SafeAreaViewComponent isDark={isDark}>
      <StatusBar style='auto' />
      <SwitchComponent isDark={isDark} setIsDark={setIsDark} />
      <View style={isDark && styles.titleView}>
        {/* Dimensions컴포넌트는 동적으로 변한느 화면의 값을 취득할 수 있는 컴포넌트로 css화면 렌더링 시 많이 사용된다. */}
        <Text> window의 현재 넓sq이 : {Dimensions.get("window").width}</Text>
        <Text> window의 현재 높이 : {Dimensions.get("window").height}</Text>
      </View>
      <View style={styles.rootContainer}>
        <FlatListComponent isDark={isDark}/>
      </View>
      <Text>ss</Text>
    </SafeAreaViewComponent>
  );
}

const styles = StyleSheet.create({
  keyContainer:{
    flex:1
  },
  lodingContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  rootContainer:{
    flex:1,
  },
  titleView:{
    backgroundColor:'white',
  }
});