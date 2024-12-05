import {
  Image,
  ImageBackground,
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
import {NavigProps} from '../interfaces/NaviProps';
import {SvgXml} from 'react-native-svg';
import {LeftArrow} from '../assets/icons/icon';

type Props = {};

const AccountCreationOtpVerificaton = ({navigation}: NavigProps<null>) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60); // 60 seconds countdown

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval); // Cleanup timer
  }, []);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) return; // Ensure only one digit is entered

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically move to the next input if a digit is entered
    if (text && index < 5) {
      const nextInput = `otp-${index + 1}`;
      const nextField = textInputsRefs[nextInput];
      nextField?.focus();
    }
  };

  const textInputsRefs: {[key: string]: any} = {}; // To store TextInput refs

  const renderInputs = () => {
    return otp.map((digit, index) => (
      <TextInput
        cursorColor={'black'}
        key={index}
        style={tw`h-12 w-12 border-b-2 border-b-primaryText`}
        keyboardType="numeric"
        maxLength={1}
        value={digit}
        onChangeText={text => handleChange(text, index)}
        ref={input => (textInputsRefs[`otp-${index}`] = input)} // Storing ref
        onKeyPress={({nativeEvent}) => {
          if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = `otp-${index - 1}`;
            const prevField = textInputsRefs[prevInput];
            prevField?.focus();
          }
        }}
      />
    ));
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <View style={tw`flex-col justify-between h-[98%] px-[4%]`}>
        <View style={tw`my-[20%]`}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={tw`flex-row gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
            <Text style={tw`font-MontserratBold text-primary  text-2xl`}>
              6-digit code
            </Text>
          </TouchableOpacity>

          <Text style={tw`text-sm text-black font-MontserratRegular`}>
            Please enter the code we've sent to your email
          </Text>

          <View style={tw`flex-row justify-between w-[100%] mx-auto`}>
            {renderInputs()}
          </View>

          {timer > 0 ? (
            <Text style={tw`mt-5 font-MontserratRegular text-black`}>
              Resend code in 00:{timer < 10 ? `0${timer}` : timer}
            </Text>
          ) : (
            <TouchableOpacity>
              <Text style={tw`mt-5 text-black font-MontserratRegular`}>
                Didn’t received code?{' '}
                <Text style={tw` text-blue-800 border-b-2 border-b-blue-700`}>
                  Send again
                </Text>{' '}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('WelcomeScreen')}
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

export default AccountCreationOtpVerificaton;

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
