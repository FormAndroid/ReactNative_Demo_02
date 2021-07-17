import React from 'react';
import { Image, View } from 'react-native';

const StartScreen = () => {

    return (
        <View>
            <Image source={require('./logo-start.png')} />
        </View>
    )
}

export default StartScreen;