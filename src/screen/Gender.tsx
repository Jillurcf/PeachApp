import React, {useState} from 'react';
import {View, Button, StyleSheet, StatusBar, Text, Image, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {warningRed} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import {RadioButton, RadioGroup, Switch} from 'react-native-ui-lib';

const Gender = ({navigation}: NavigProps<null>) => {
  const [value, setValue] = useState(false);
  const [valueOne, setValueOne] = useState(false);
  const [currentValue, setCurrentValue] = useState('yes');

  return (
    <ScrollView contentContainerStyle={tw`flex-1 flex-col justify-between h-[98%]`}>
      <View style={tw``}>
        <View style={tw`m-[10%]`}>
          <Text style={tw`font-MontserratBlack text-primary text-2xl`}>
            I'm a
          </Text>
          <View style={tw`my-6`}>
            <RadioGroup
            
              initialValue={currentValue}
              onValueChange={setCurrentValue}>
              <RadioButton color='black' containerStyle={tw`border p-4 rounded-3xl`} labelStyle={tw`text-primary font-MontserratBold`} style={tw``} value={'male'} label={'Male'} />
              <RadioButton color='black' containerStyle={tw`border p-4 rounded-3xl`} labelStyle={tw`text-primary font-MontserratBold`} style={tw``} value={'female'} label={'Female'} marginT-15 />
              <RadioButton color='black' containerStyle={tw`border p-4 rounded-3xl`} labelStyle={tw`text-primary font-MontserratBold`} style={tw``} value={'Other'} label={'Other'} marginT-15  />
            </RadioGroup>
          </View>

          <View style={tw`my-12`}>
            <View style={tw`flex-row justify-between py-4`}>
              <Text style={tw`font-MontserratBold text-primary`}>
            Show on Profile
              </Text>
              <Switch offColor={'gray'} onColor={'black'} style={tw``} value={valueOne} onValueChange={setValueOne} />
            </View>
          </View>
        </View>

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('choice')}
              titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
              title="Continue"
              containerStyle={tw`bg-primary w-[90%] my-2 rounded-full`}
            />
          </View>
        </View>
      </View>

      <StatusBar backgroundColor={'gray'} translucent={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Gender;
