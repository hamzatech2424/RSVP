import React from "react"
import {View,Text } from "react-native"


const ContentContainer = ({children,style}) => {
    return(
        <View style={[{width:"85%",alignSelf:"center"},style]}>
          {children}
        </View>
    )
}


export default ContentContainer