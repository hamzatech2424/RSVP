import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {Colors} from '../../theme/color'




const AbstractRadio = ({style,active}) => {


    return(

        <View style={[style,{backgroundColor:Colors.Primary_white,height:30,width:30,borderRadius:15,justifyContent:'center',alignItems:'center'}]}>
            
            {active ?
            <View style={{backgroundColor:'#FF5959',height:20,width:20,borderRadius:10,justifyContent:'center',alignItems:'center'}} />
             :
             null
            }
          

        </View>

    )
}



export default AbstractRadio