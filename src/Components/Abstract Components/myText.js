import React from 'react';
import {Text} from 'react-native';


const MyText = ({children, style,}) => {
  return (
    <Text  style={style}>
      {children}
    </Text>
  );
};
export default MyText;
