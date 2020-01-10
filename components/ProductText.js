import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {homeStyle} from "../style/home";
import {fontsStyle} from "../style/fonts";

export default class ProductText extends React.Component {
  constructor() {
    super();
  }

  render() {

    if(this.props.data == null){
      return null;
    }
    return (
        <View>
          <Text style={fontsStyle.tittleModalProduct}>Nom du produit : {this.props.data.product_name}</Text>
          <Text style={fontsStyle.tittleModalProduct}>Code : </Text><Text style={fontsStyle.modalProductInformation}>{this.props.data.code}</Text>
          <Text style={fontsStyle.tittleModalProduct}>Fabricant : </Text><Text style={fontsStyle.modalProductInformation}>{this.props.data.brands_tags}</Text>
          <Text style={fontsStyle.tittleModalProduct}>Site Internet : </Text><Text style={fontsStyle.modalProductInformation}>{this.props.data.link}</Text>
          <Text style={fontsStyle.tittleModalProduct}>Nutriscore : </Text><Text style={fontsStyle.nutriScore}>{this.props.data.nutrition_grade_fr}</Text>
          <Text style={fontsStyle.tittleModalProduct}>Ingredients : </Text><Text style={fontsStyle.modalProductInformation}>{this.props.data.ingredients_text}</Text>
          <Text style={fontsStyle.tittleModalProduct}>Attention ! Contient de {this.props.data.ingredients_from_palm_oil_tags}</Text>
        </View>
    );
  }
}