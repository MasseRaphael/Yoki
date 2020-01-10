import React from 'react';
import {Text, TouchableOpacity, View, Modal, Alert} from 'react-native';
import {homeStyle} from "../style/home";
import {fontsStyle} from "../style/fonts";
import { RNCamera} from 'react-native-camera';
import AppHeader from "./AppHeader";

export default class ScanButton extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,}
  }

  setModalVisible =(bool) => {
    this.setState({modalVisible: bool});
  };

  handleScanPress = () => {
    this.setModalVisible(true)
    //alert('Je scan un produit')
  };

  render() {

    return (
        <View style={homeStyle.scanButtonView}>
          <TouchableOpacity style={homeStyle.scanButton} onPress={this.props.handlePress}>
            <Text style={fontsStyle.scanButtonText}>Scanner</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed');}}>
          <View style={{flex: 1}}>
            <AppHeader title="Sanner" />

            <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />

            <TouchableOpacity 
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={{
                position: "absolute", 
                backgroundColor: "lightblue", 
                width: "100%",
                height: 70,
                left: 0, 
                bottom: 0}}>


                <Text>Hide Modal</Text>
            </TouchableOpacity>              
          </View>
        </Modal>
        </View>
    );
  }
}