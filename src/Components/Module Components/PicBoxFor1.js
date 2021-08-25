import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Touchable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {AbstractRadio} from '../Abstract Components';

const PicBoxFor1 = ({imageUrl, activeRadio, onPressSend}) => {
  const [active, setActive] = useState(false);
  const defaultImageUrl = imageUrl ? imageUrl : false;

console.log(activeRadio,'state from 1')

  return (
    <React.Fragment>
    
        <TouchableOpacity
          activeOpacity={1}
          onPress={()=>{
            onPressSend()
            setActive(activeRadio)
          }}
          style={styles.touchableStyle}>
          <Image
            resizeMode={'cover'}
            source={{uri: defaultImageUrl}}
            style={{height: '100%', width: '100%', borderRadius: 8}} />

            
            <Text
              style={styles.textStyle}>
              Cliente
            </Text>
            {activeRadio ? (
              <AbstractRadio
                style={{position: 'absolute', right: 0, right: 15, top: 15}}
                active={active}
              />
            ) : (
              <AbstractRadio
                style={{position: 'absolute', right: 0, right: 15, top: 15}}
              />
            )}
     
        </TouchableOpacity>
   
    </React.Fragment>
  );
};

export default PicBoxFor1;

const styles = StyleSheet.create({
  touchableView: {
    height: 140,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    
  },
  textStyle:{
    color: 'white',
    paddingTop: 15,
    paddingLeft: 15,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    position:'absolute'
  },
  image1View: {
    height: 140,
    width: '50%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // borderRadius: 10,
  },
  image2View: {
    height: 140,
    width: '50%',
    borderRadius: 10,
  },
  touchableStyle: {
    height: 140,
    width: '100%',
    borderRadius: 10,

  },
});









