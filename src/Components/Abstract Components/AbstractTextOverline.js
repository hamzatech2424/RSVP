import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AbstractTextOverline = ({text}) => {
  return (
    <View style={styles.MainOuterView}>
      <View style={styles.lineOuterView}>
        <View
          style={styles.lineView}></View>
      </View>

      <View
        style={styles.TxtOuterView}>
        <Text
          style={styles.txtStyle}>
          {text}
        </Text>
      </View>

      <View style={styles.lineOuterView}>
        <View
          style={styles.lineView}></View>
      </View>
    </View>
  );
};

export default AbstractTextOverline;

const styles = StyleSheet.create({
  MainOuterView: {
    // backgroundColor: 'red',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  lineOuterView: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineView:{
    height: 2, 
    width: '100%',
     backgroundColor: '#ACB1C1'
  },
  TxtOuterView:{
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStyle:{
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Nunito',
    color: '#8890A6',
  }
});
