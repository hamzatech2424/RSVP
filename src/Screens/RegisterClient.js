import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from './style';
import {Header} from '../Components/Module Components';
import {Colors} from '../theme/color';
import {
  ContentContainer,
  AbstractImageUploadBox,
  AbstractTextInput,
  AbstractButton,
} from '../Components/Abstract Components';

const RegisterClient = ({navigation}) => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');

  // console.log(firstName,lastName,email,Phone)

  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <Header text={'Register as a Client'} containerheight={'23%'} />

      <ContentContainer
        style={{
          height: '75%',
          flexDirection: 'column',
        }}>
        <View style={styles.rcimgUploadContainerView}>
          <AbstractImageUploadBox />
        </View>

        <View style={styles.rctextInputsContainerView}>
          <AbstractTextInput
            label={'First Name'}
            value={firstName}
            setvalue={txt => setFirstname(txt)}
          />
          <AbstractTextInput
            label={'last Name'}
            value={lastName}
            setvalue={txt => setLastname(txt)}
          />
          <AbstractTextInput
            label={'Email'}
            value={email}
            setvalue={txt => setEmail(txt)}
          />
          <AbstractTextInput
            label={'Phone'}
            value={Phone}
            setvalue={txt => setPhone(txt)}
          />
        </View>

        <View style={styles.rcbuttonContainerView}>
          <AbstractButton
            txt={'register'}
            width={'90%'}
            height={55}
            onPress={() => navigation.navigate('ConfirmationClientPage')}
          />
        </View>
      </ContentContainer>
    </View>
  );
};

export default RegisterClient;
