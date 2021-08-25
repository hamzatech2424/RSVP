import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../theme/color';
import {styles} from './style';
import {
  ContentContainer,
  AbstractButton,
} from '../Components/Abstract Components';
import RegistractionConfirmSVG from '../Assets/icons/registrationConfirmSVG';

const ConfirmationClient = () => {
  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <ContentContainer
        style={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View style={styles.ccOuterContainerView}>
          <View style={styles.ccImageContainerView}>
            <RegistractionConfirmSVG size={300} />
          </View>

          <View style={styles.ccTextContainerView}>
            <Text
              style={
                styles.cctextView
              }>{`Congratulations, You’re \n a member of RSVP now`}</Text>
          </View>

          <View style={styles.ccButtonContainerView}>
            <AbstractButton
              txt={'manage your events'}
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

export default ConfirmationClient;
