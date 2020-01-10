import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
          <Text style={fontsStyle.productName}>Nom : {this.props.data.product_name}</Text>
          <Text style={fontsStyle.productName}>Fabricant : </Text><Text>{this.props.data.brands_tags}</Text>
          <Text style={fontsStyle.productName}>Site Internet : </Text><Text>{this.props.data.link}</Text>
          <Text style={fontsStyle.productName}>Nutriscore : </Text><Text style={fontsStyle.nutriScore}>{this.props.data.nutrition_grade_fr}</Text>
          <Text style={fontsStyle.productName}>Ingredients : </Text><Text>{this.props.data.ingredients_text}</Text>

        </View>
    );
  }
}