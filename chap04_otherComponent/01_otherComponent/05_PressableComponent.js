import React from 'react';
import { StyleSheet, View, Text, Image, Alert, Pressable } from 'react-native';
import LinkingComponent from './06_LinkingComponent';

const PressableComponent = ({ item, isDark }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { ...styles.imageContainer, borderColor: isDark ? 'white' : 'black' },
                pressed && styles.pressed
            ]}
            onPress={() =>
                Alert.alert(
                    '인물 알림창',
                    item.name + "에 대하여 공부합시다.",
                    [{ text: 'Cancel' }],
                    { cancelable: false }
                )
            }>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.img }} />
            </View>
            <View style={styles.contentContainer}>
                <Text>이름: {item.name}</Text>
                <Text>업적: {item.content}</Text>
                <View style={styles.LinkingContainer}>
                    <LinkingComponent link={item.link}/>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        marginHorizontal: 20, // Corrected typo
        marginVertical: 3, // Corrected typo
        borderWidth: 3
    },
    imageContainer: {
        marginHorizontal: 5,
        padding: 2
    },
    image: {
        width: 100,
        height: 100
    },
    contentContainer: {
        flex: 1
    },
    pressed: {
        opacity: 0.7
    },
    LinkingContainer: {
        flexDirection: 'row-reverse',
        marginLeft: 7,
        marginBottom: 5
    }
});

export default PressableComponent;
