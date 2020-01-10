import { StyleSheet} from 'react-native';

export const fontsStyle = StyleSheet.create({
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  nutriScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textTransform: "uppercase",
    marginLeft: 10
  },

  productScanDate: {
    color: 'gray',
    fontSize: 12
  },
  scanButtonText: {
    fontSize: 16,
  },
  tittleModalProduct: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  modalProductInformation: {
    marginLeft: 10,
  }
})