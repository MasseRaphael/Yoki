import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {homeStyle} from '../style/home';
import {fontsStyle} from "../style/fonts";

export default class ScanButtonView extends React.Component {

    handleScanPress = () => {
        alert('Je scan un produit')
      }
    
    render() {

        return(

        <View style={homeStyle.scanButtonView}>
          <TouchableOpacity style={homeStyle.scanButton} onPress={this.handleScanPress}>
            <Text style={fontsStyle.scanButtonText}>Scanner</Text>
          </TouchableOpacity>
        </View>
        )
    }
};