/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";
import ScanButtonView from "./components/ScanButtonView";
import ProductsHistory from "./components/ProductsHistory";

export default class App extends React.Component {


  render() {


    return (
      <View style={globalStyle.container}>
        
        <AppHeader />

        <ScanButtonView />

        <ProductsHistory />
        
      </View>
    );
  }
};

