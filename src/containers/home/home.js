import React from 'react';

import { Text, View } from "react-native";
import globalStyle from "../../globalStyle";

const Home = (props) => {

    return (
        <View style={globalStyle.screen}>
            <Text style={globalStyle.title}>
                Accueil
            </Text>
        </View>
    );
}

export default Home;