
import { useState } from 'react';
import {StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';
import { CameraView, useCameraPermissions,BarcodeScanningResult } from 'expo-camera/next';

export default function BarcodeScanner(){
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [data, setData]=useState(null)
    const [type,setType] = useState(null)



return (
    <View style={styles.container}>
      <CameraView 
        barCodeScannerSettings={{
            barCodeTypes: ["qr",'aztec','ean13','ean8','qr','pdf417','upc_e','datamatrix','code39','code93','itf14','codabar','code128','upc_a'],
          }}
        onBarcodeScanned={(BarcodeScanningResult)=>{
            setData(BarcodeScanningResult.data)
            setType(BarcodeScanningResult.type)
        }}
      style={styles.camera} facing={facing}>
          <TouchableOpacity  />
      </CameraView>
      <Text>Barcode data: {data}</Text>
      <Text>Barcode Type: {type}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    camera:{
        height:200,
        width:200,
    },
    
  })