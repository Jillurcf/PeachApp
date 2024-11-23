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
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IwtButton from '../components/buttons/IwtButton';
import {Love} from '../assets/icons/icon';

type Props = {};

const LikeSendingScreen = ({navigation}: NavigProps<null>) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const text =
    'Peach uses third party services to track analytics data, and provide features such as authentication, chat, and share links. Peach uses third party services to track analytics data, and provide features such as authentication, chat, and share links.';
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={tw`flex-1 items-center justify-center px-[4%]`}>
      <View style={tw``}>
        <View style={tw`my-[10%]  justify-center`}>
          <Text
            style={tw`font-MontserratBlack text-black text-2xl text-center`}>
            Thoughtful connections make for better dates.
          </Text>
          
          <View style={tw`items-center justify-center px-[4%] my-24 h-72`}>
            <Image
              style={tw`w-full h-full`}
              source={require('../assets/images/likeSendingImg.png')}
            />
          </View>
        </View>

        <View style={tw``}>
          <View style={tw`justify-center items-center`}>
            <IwtButton
              svg={Love}
              onPress={() => navigation?.navigate('bottomRoute')}
              titleStyle={tw`text-white font-MontserratBold text-center `}
              title="Accept & continue"
              containerStyle={tw`bg-primary w-[90%] items-center justify-center gap-3 rounded-full`}
            />
          </View>
        </View>
      </View>

      <StatusBar backgroundColor={'gray'} translucent />
    </View>
  );
};

export default LikeSendingScreen;

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
