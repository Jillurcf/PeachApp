import {
   
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import tw from '../lib/tailwind';
  import TButton from '../components/buttons/TButton';
   import { NavigProps } from '../interfaces/NaviProps';
import IwtButton from '../components/buttons/IwtButton';
import { PlusIcon } from '../assets/icons/icon';
  
  type Props = {};
  
  const CreateYourProfile = ({navigation}: NavigProps<null>) => {
   
  
    
  
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <View style={tw`flex-col justify-between h-[95%]`}>
          <View style={tw`my-[10%]  justify-center`}>
          
            <Text style={tw`font-MontserratBlack text-black text-2xl text-center`}>Profiles with personality lead to better convos.</Text>
            <View style={tw`items-center justify-center`}>
            <Image style={tw`w-[70%] h-[70%]`} source={require('../assets/images/createProfile.png')} />
            </View>
              </View>

            <View
            style={tw``}>
            <View style={tw``}>
                <IwtButton
                svg={PlusIcon}
                onPress={() => navigation?.navigate('uploadPhotos')}
                titleStyle={tw`text-white font-MontserratBold text-center `}
                title="Create your profile"
                containerStyle={tw`bg-primary items-center justify-center mx-auto w-[90%] rounded-full`}
                />
              
            </View>
          </View>
        </View>
  
        <StatusBar backgroundColor={'gray'} translucent />
      </View>
    );
  };
  
  export default CreateYourProfile;
  
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
  