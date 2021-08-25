import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Header, PicBoxFor1, PicBoxFor2} from '../Components/Module Components';
import {Colors} from '../theme/color';
import {
  ContentContainer,
  AbstractButton,
} from '../Components/Abstract Components';

const Register = ({navigation}) => {
  const [clientSelect, setClientSelect] = useState(false);
  const [providerSelect, setProviderSelect] = useState(false);


  console.log(clientSelect, 'client');
  console.log(providerSelect, 'provider');

  return (
    <View style={[styles.container, {backgroundColor: Colors.Primary_white}]}>
      <Header text={'Tipo de\nCuenta'} containerheight={'23%'} />

      <ContentContainer
        style={{
          height: '75%',
          flexDirection: 'column',
        }}>
        <View style={styles.rimagesContainerView}>
          <TouchableOpacity
            activeOpacity={1}
            style={{width: '100%', height: '50%'}}>
            <PicBoxFor1
              onPressSend={() => {
                setClientSelect(true);
                setProviderSelect(false);
              }}
              activeRadio={clientSelect}
              imageUrl="data:image/jpeg;base64,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"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: '100%', height: '50%'}}
            activeOpacity={1}>
            <PicBoxFor2
              onPressSend={() => {
                setProviderSelect(true);
                setClientSelect(false);
              }}
              activeRadio={providerSelect}
              imageUrl1="https://cdn-cemfc.nitrocdn.com/prVXKFGqEhkqWRitMvLtbacbvotgrvJH/assets/static/optimized/rev-b3302a2/wp-content/uploads/2020/09/client-vs-custoemr-scaled.jpg"
              imageUrl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQstvr2MCqEY8Jb0_opxIv0RnHatxy34Rn5xg&usqp=CAU"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rButtonContainerView}>
          <AbstractButton
            txt={'COMPLETAR REGISTRO'}
            btnStyle={'primary'}
            width={'90%'}
            height={55}
            onPress={() => {
              if (clientSelect) {
                navigation.navigate('RegisterClientPage');
              } else if (providerSelect) {
                navigation.navigate('RegisterProviderPage');
              } else if (!clientSelect && !providerSelect) {
                alert('Kindly Select one Category');
              }
            }}
          />
        </View>
      </ContentContainer>
    </View>
  );
};

export default Register;
