import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ContentContainer} from '../Abstract Components';
import {MyText} from '../Abstract Components';
import {goBack} from '../../Navigation/AuthStack';

const Header = ({text, containerheight, navigation}) => {
  const defaultContainerHeight = containerheight ? containerheight : '29%';

  return (
    <View style={[styles.headerContainer, {height: defaultContainerHeight}]}>
      <ContentContainer style={{height: '100%', justifyContent: 'center'}}>
        <View style={styles.IconandTxtOuterView}>
          <TouchableOpacity
            onPress={() => goBack()}
            activeOpacity={0.9}
            style={{width: 20, height: 30, marginLeft: -8}}>
            <Ionicons
              name={'ios-chevron-back-outline'}
              color={Colors.Primary_white}
              size={30}
              style={{width: 20}}
            />
          </TouchableOpacity>

          <View style={styles.textOuterView}>
            <MyText style={styles.textStyle}>
              <Text>{text}</Text>
            </MyText>
          </View>
        </View>
      </ContentContainer>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.Primary_pink,
    width: '100%',
  },
  IconandTxtOuterView: {
    width: '60%',
    height: '75%',
    justifyContent: 'space-between',
  },
  textOuterView: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  textStyle: {
    color: Colors.Primary_white,
    fontSize: 35,
    fontWeight: '900',
    fontFamily: 'Open Sans',
  },
});
