import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../theme/color';
import {styles} from './style';
import {
  ContentContainer,
  AbstractButton,
} from '../Components/Abstract Components';
import RegistractionConfirmSVG from '../Assets/icons/registrationConfirmSVG';

const ConfirmationProvider = ({navigation}) => {
  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <ContentContainer
        style={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View style={styles.cpOuterContainerView}>
          <View style={styles.cpImageContainerView}>
            <RegistractionConfirmSVG size={300} />
          </View>

          <View style={styles.cpTextContainerView}>
            <Text
              style={
                styles.cptextView
              }>{`Congratulations, You’re \n a member of RSVP now`}</Text>
          </View>

          <View style={styles.cpButtonContainerView}>
            <AbstractButton
              txt={'Offer your space/service'}
              btnStyle={'primary'}
              width={'90%'}
              height={55}
            />
          </View>
        </View>
      </ContentContainer>
    </View>
  );
};

export default ConfirmationProvider;
