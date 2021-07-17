import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Button, Text, View } from "react-native";
import globalStyle, { color } from "../../globalStyle";

const About = (props) => {

    const nav = useNavigation();

    const handleBack = () => {
        nav.goBack();
    }

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                A propros de l'app
            </Text>
            <Button title='Retour' onPress={handleBack}
                    color={color.secondary} />
        </View>
    );
}

export default About;