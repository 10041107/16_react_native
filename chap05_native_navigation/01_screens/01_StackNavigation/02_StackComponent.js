import { Button } from "react-native";

const StackComponent = () =>{
    const page = () =>{
        navigation.navigate("StackView");
    }

    const tapRouter = () =>{
        navigation.navigate("NestingNAvigation");
    }

    return(
        <View>
            <Text>
                stact view화면
            </Text>
            <Button onPress={page} title="이동"/>
        </View>
    )
}

export default StackComponent;