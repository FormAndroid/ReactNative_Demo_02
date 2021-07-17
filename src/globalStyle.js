import { StyleSheet } from 'react-native';

export const color = {
    primary: '#1363bf',
    secondary: '#bf9411',
    yellow: '#f2f553',
    gray: '#555',
    lightGray: '#CECECE'
};


export default StyleSheet.create({
    screen : {
        padding: 20,
        flex:1
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'cursive',
        textAlign: 'center',
        color: color.primary,
        textDecorationLine: 'underline',
        marginBottom:20
    }
});