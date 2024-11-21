import {
   
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import LinearGradient from 'react-native-linear-gradient';
  import tw from '../lib/tailwind';
  import TButton from '../components/buttons/TButton';
  import InputText from '../components/inputs/InputText';
  import {RadioButton} from 'react-native-ui-lib';
  import {TouchableOpacity} from 'react-native-gesture-handler';
  import { NavigProps } from '../interfaces/NaviProps';
  
  type Props = {};
  
  const WelcomeScreen = ({navigation}: NavigProps<null>) => {
   
  
    
  
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <View style={tw`flex-col justify-between h-[98%] px-[4%]`}>
          <View style={tw`my-[10%]  justify-center`}>
            <Text style={tw` font-MontserratRegular`}>Welcome to Peace app</Text>
            <Text style={tw`font-MontserratBlack text-black text-2xl`}>Meet. Match. Move On... Together</Text>
            <View style={tw`items-center justify-center`}>
            <Image style={tw`w-[70%] h-[70%]`} source={require('../assets/images/OpeningScreenImg.png')} />
            </View>
              </View>

            <View
            style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
            <View style={tw`my-2 flex items-center justify-center mx-auto`}>
              <TButton
              onPress={() => navigation?.navigate('WelcomeName')}
                titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
                title="Continue"
                containerStyle={tw`bg-primary w-[90%] my-2 rounded-full`}
              />
            </View>
          </View>
        </View>
  
        <StatusBar backgroundColor={'gray'} translucent />
      </View>
    );
  };
  
  export default WelcomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, // Full-screen view
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center', // Centers content horizontally
    },
  
     otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    
    timer: {
      marginTop: 20,
      fontSize: 14,
      color: '#888',
    },
    resend: {
      marginTop: 20,
      fontSize: 14,
      fontWeight: '600',
      color: '#007bff',
    },
  });
  