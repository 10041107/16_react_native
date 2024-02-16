import {View, Text} from "react-native"

const ViewComponent = ({isTrue, styles}) =>{
    if(!isTrue){
        return <View>
            에러 발생
        </View>
    }

    return(
        <View styles = {styles}>
            <Text>i am 썬더람쥐</Text>
        </View>
    )
}

export default ViewComponent;