import {StyleSheet} from 'react-native';
import {Colors} from '../theme/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wsMain: {
    width: '100%',
     height: '100%',
    // backgroundColor: 'red',
  },
  wsMain1: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  wsfooterBtnsView: {
    //    backgroundColor: 'yellow',
    width: '70%',
    height: 50,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 86,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wsImage: {
    width: '100%',
    height: "68%",
  },
  AppIconView:{
    width:'80%',
    height:200,
    position:'absolute',
    top:120,
    alignSelf:'center',
    justifyContent:'center'
    ,alignItems:'center'
  },
  wsfooterTxtView: {
    height: 22,
    width: 206,
    position: 'absolute',
    bottom: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wsfootertxtStyle: {
    fontWeight: '700',
    color: Colors.Primary_white,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  lsblueTextView:{
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  lsButtonOuterView:{
    height: 230,
    width: '100%',
    marginTop: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rcimgUploadContainerView: {
    // backgroundColor: 'green',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rctextInputsContainerView: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
  },
  rcbuttonContainerView: {
    height: '18%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rpimgUploadContainerView: {
    // backgroundColor: 'green',
    width: '100%',
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rptextInputsContainerView: {
    // backgroundColor:'red',
    width: '100%',
    justifyContent: 'space-between',
  },
  rpbuttonContainerView: {
    // backgroundColor:'red',
    height: '13%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rimagesContainerView:{
    height: 310,
    width: '100%',
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  rButtonContainerView:{
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent:'center',
    alignItems:'center'
  },
  ccOuterContainerView:{
    width:'100%',
    height:'70%'
  },
  ccImageContainerView:{
    width:'100%',
    height:'50%',
    justifyContent:'center',
    alignItems:'center'
  },
  ccTextContainerView:{
    width:'100%',
    height:'20%',
    alignItems:'center'
  },
  cctextView:{
    fontSize:36,
    color:'#13204D',
    fontFamily:'Open Sans',
    fontWeight:'bold',
    width:'90%',
    height:'90%',
    textAlign:'center'
  },
  ccButtonContainerView:{
    width:'100%',
    height:'20%',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    justifyContent:'flex-end'
  },
  cpOuterContainerView:{
    width:'100%',
    height:'70%'
  },
  cpImageContainerView:{
    width:'100%',
    height:'50%',
    justifyContent:'center',
    alignItems:'center'
  },
  cpTextContainerView:{
    width:'100%',
    height:'20%',
    alignItems:'center'
  },
  cptextView:{
    fontSize:36,
    color:'#13204D',
    fontFamily:'Open Sans',
    fontWeight:'bold',
    width:'90%',
    height:'90%',
    textAlign:'center'
  },
  cpButtonContainerView:{
    width:'100%',
    height:'20%',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    justifyContent:'flex-end'
  }
  
});
