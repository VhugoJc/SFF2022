// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
    export const styles = ({
        title: {
          color: '$light',
          fontSize: '$3',
          fontFamily: 'Rubik-bold',
          paddingTop: '$4',
          paddingLeft: '$3',
          paddingRight: '$3',
        },
        subtitle:{
          fontFamily: 'Rubik-regular',
          color: '$primary',
          paddingTop:'$3',
          paddingBottom:'$2',
          fontSize: '$3',
        },
        text:{
          color: '$primary',
          fontSize: '$1',
          fontFamily: 'Rubik-regular'
        },
        homeBanner: {
          height: '100%',
        },
        container: {
        },
        iconBtn:{
          color:'$primary',
          width:'100%',
          paddingVertical:'$2',
          paddingHorizontal:'$4',
          marginRight:40,
          flexDirection:'row',
          alignItems:'center',
          borderRadius:12,
          height:40,
          justifyContent:"center"

        },
        iconBtnIcon:{
          color:'$primary',
          fontSize:'$0',
          paddingRight:'$2'
        },
        blueLabel:{
          color: '$blueLight',
          fontSize: '$1',
          fontFamily: 'Rubik-regular'
        },
        flexDirection:{
          flexDirection:'row'
        },
      });