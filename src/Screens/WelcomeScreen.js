import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image,Dimensions} from 'react-native';
import {AbstractButton} from '../Components/Abstract Components';
import {styles} from './style';
import AppIconSVG from '../Assets/icons/appIconSVG';

const WelComeScreen = ({navigation}) => {

let dim = Dimensions.get('screen')

  return (
    <View style={styles.container}>
      <View style={styles.wsMain}>
        <ImageBackground
          resizeMode={'cover'}
          source={require('../Assets/images/introbg.png')}
          style={{height:dim.height,width:dim.width}}></ImageBackground>

        <View style={[StyleSheet.absoluteFillObject, styles.wsMain1]}>
          {/* <View style={{width:'100%',height:'50%'}}> */}
          <Image
          resizeMode={'cover'}
            source={require('../Assets/images/intromapbg.png')}
            style={{width:'100%',height:'65%'}}
          />
         {/* </View> */}
          <View style={styles.AppIconView}> 
              <AppIconSVG size={650} />
          </View>

          <View style={styles.wsfooterBtnsView}>
            <AbstractButton txt={'acceder'} />
            <AbstractButton txt={'registrate'} btnStyle={'transparent'} onPress={()=>navigation.navigate('LoginScreenPage')} />
          </View>

          <View style={styles.wsfooterTxtView}>
            <Text style={styles.wsfootertxtStyle}>ENTRAR COMO VISITANTE</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelComeScreen;
