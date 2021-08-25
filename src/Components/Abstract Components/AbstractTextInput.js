import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from '../../theme/color';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield'

const AbstractTextInput = ({
  value,
  setvalue,
  label,
  secureText,
  style,
}) => {
 
  const defaultlabel = label ? label : 'Email';
  const defaultTextEntry = secureText ? secureText : false;
  const defaultStyle = style ? style : {};

  return (
    <View style={[{height: 80, width: '100%'}, defaultStyle]}>
     
     
     <TextField
     label={defaultlabel}
     lineWidth={1}
     activeLineWidth={1}
     disabledLineWidth={1}
     tintColor={Colors.Primary_grey}
     value={value}
     onChangeText={setvalue}
     fontSize={16}
     labelFontSize={16}
     secureTextEntry={secureText}
     />

    
    </View>
  );
};

export default AbstractTextInput;
