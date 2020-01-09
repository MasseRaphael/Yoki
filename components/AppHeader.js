import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "../style/global";

export default class AppHeader extends React.Component {
    
    render() {

        return(

            <View style={globalStyle.header}>
                <Text style={globalStyle.headerText}>Yoki</Text>
            </View>
        )
    }
       
}