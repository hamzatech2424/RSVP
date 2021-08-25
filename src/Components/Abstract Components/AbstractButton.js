import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/color';

const defaultStyles = {
  borderRadius: 11,
  borderWidth: 1,
};

const getbtnStyle = type => {
  let borderStroke = '';
  let bgColor = '';
  let fntColor = '';

  switch (type) {
    case 'primary':
      borderStroke = Colors.Primary_pink;
      bgColor = Colors.Primary_pink;
      fntColor = Colors.Primary_white;
      break;

    case 'transparent':
      borderStroke = Colors.Primary_white;
      bgColor = 'transparent';
      fntColor = Colors.Primary_white;
      break;

    case 'transparent2':
      borderStroke = Colors.Primary_pink;
      bgColor = 'transparent';
      fntColor = Colors.Primary_pink;
      break;

    default:
      borderStroke = Colors.Primary_pink;
      bgColor = Colors.Primary_pink;
      fntColor = Colors.Primary_white;
      break;
  }

  return {borderStroke, bgColor, fntColor};
};

const AbstractButton = ({height, width, btnStyle, txt,onPress}) => {
  let {borderStroke, bgColor, fntColor} = getbtnStyle(btnStyle);

  let btndefaultWidth = width ? width : 180;
  let btndefaultheight = height ? height : 50;
  let defaulttxt = txt ? txt : 'Alice';

  return (
    <TouchableOpacity
    onPress={onPress}
      activeOpacity={1}
      style={[
        defaultStyles,
        {
          height: btndefaultheight,
          width: btndefaultWidth,
          borderColor: borderStroke,
          backgroundColor: bgColor,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <Text
        style={{
          textTransform: 'uppercase',
          fontSize: 16,
          fontWeight: '800',
          color: fntColor,
          // fontFamily:'Nunito'
        }}>
        {defaulttxt}
      </Text>
    </TouchableOpacity>
  );
};

export default AbstractButton;
