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
import {NavigProps} from '../interfaces/NaviProps';
import InputText from '../components/inputs/InputText';

type Props = {};

const Location = ({navigation}: NavigProps<null>) => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`flex-col justify-between h-[100%]`}>
        <View style={tw`my-[10%]  justify-center`}>
          <View style={tw`px-[4%] my-6`}>
            <Text style={tw`font-MontserratBlack text-black text-2xl`}>
              Where do you live?
            </Text>
            <Text
              style={tw`font-MontserratRegular text-primaryText text-lg px`}>
              By sharing your location, get match near you
            </Text>
          </View>
          <View style={tw`items-center justify-center border border-gray-600 h-[66%]`}>
            
          </View>
        </View>

        <View style={tw` rounded-t-3xl bg-white`}>
        <View style={tw`h-14 w-[90%] px-[4%] mx-auto`}>
            <InputText
              placeholder="New York USA"
              placeholderTextColor={''}
              style={tw`font-MontserratRegular`}
              cursorColor={'black'}
              containerStyle={tw`border-0 bg-transparent border-b-2 border-b-black`}
              focusSTyle={tw`text-black`}
              fieldStyle={tw`text-black`}
            />
          </View>
          <View style={tw`px-[4%] mx-auto my-2`}>
            <TButton
              onPress={() => navigation?.navigate('gender')}
              titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
              title="Continue"
              containerStyle={tw`bg-primary rounded-full w-[90%]`}
            />
          </View>
        </View>
      </View>

      <StatusBar backgroundColor={'gray'} translucent />
    </View>
  );
};

export default Location;

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
