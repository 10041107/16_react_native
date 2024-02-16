import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TitleView } from './05_StackParam';
import { Button } from 'react-native';
import StackProps from './04_StackProps';


const Stack = createStackNavigator();

const IndexComponent = () => {
    const openHandler = () => {
        console.log('화면이동');
    };

    const TitleView = () => (
        <Button onPress={() => alert('this is button')} title="info" color="#000" />
    );

    return (
        <Stack.Navigator
            initialRouteName="StackComponent"
            screenOptions={{
                title: 'My home',
                headerStyle: { backgroundColor: '#ff511e' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                contentStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen
                name="StackView"
                component={StackView}
                options={{
                    title: '스택화면',
                }}
                listeners={{ openHandler }}
            />

            <Stack.Screen
                name="StackParams"
                options={{
                    headerTitle: () => <TitleView/>,
                    headerRight: () => (
                        <Button onPress={() => alert('this is button')} title="info" color="#000" />
                    ),
                }}
            />

            <Stack.Screen
                name="StackProps"
            >
                {(props) => (
                    <StackProps {...props} test="Props" />
                )}
            </Stack.Screen>

            <Stack.Screen name="StackComponent" component={StackComponent} />
        </Stack.Navigator>
    );
};

export default IndexComponent;
