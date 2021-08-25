import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {AbstractTextInput, AbstractButton} from '../Abstract Components';
import {Colors} from '../../theme/color';

const ModalCompo = ({isVisible, setModalVisiblity}) => {
  const [newEmail, setnewEmail] = useState('');



  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisiblity();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.contentOuterView}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Nunito',
                  fontSize: 27,
                  fontWeight: 'bold',
                }}>
                Olvidaste tu contraseña?
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Nunito',
                  fontSize: 25,
                  paddingTop: 10,
                }}>
                Entra el correo a donde enviaremos un{' '}
              </Text>
              <Text
                style={{color: 'black', fontFamily: 'Nunito', fontSize: 25}}>
                {' '}
                link para cambiar tu contraseña
              </Text>
            </View>

            <View style={styles.txtinputView}>
              <AbstractTextInput
                value={newEmail}
                setvalue={txt => setnewEmail(txt)}
                label={'EMAIL'}
              />
            </View>

            <View style={styles.btnOuterView}>
              <AbstractButton width={'80%'} height={'50%'} txt={'ENVIAR'} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalCompo;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    // marginTop: 22
  },
  modalView: {
    marginTop: 20,
    height: 380,
    width: '92%',
    backgroundColor: Colors.Primary_white,
    flexDirection: 'column',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  contentOuterView: {
    width: '100%',
    // backgroundColor:'red',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtinputView: {
    width: '88%',
    // backgroundColor:'green',
    justifyContent: 'flex-end',
    height: '25%',
  },
  btnOuterView: {
    width: '100%',
    // backgroundColor:'grey',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
