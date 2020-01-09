import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {homeStyle} from '../style/home';
import {fontsStyle} from "../style/fonts";

export default class ProductItem extends React.Component {
    
    handleProductPress = (id) => {
        alert('Je clique sur un produit avec l\'id : ' + id)
      }

      render() {

        return(
            
                <TouchableOpacity onPress={() => this.handleProductPress(this.props.produit.id)} key={this.props.produit.id} style={homeStyle.productContainer}>
                    <Text style={fontsStyle.productName}>{this.props.produit.name}</Text>
                    <Text style={fontsStyle.productScanDate}>{this.props.produit.date.toDateString()}</Text>
                </TouchableOpacity>
            
                
        )
    }
}
