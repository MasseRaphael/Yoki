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
          <Text>{this.props.data.product_name}</Text>
          <Text>{this.props.data.link}</Text>

        </View>
    );
  }
}