import React, {useState} from 'react';
import {View, Button, StyleSheet, StatusBar, Text} from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {RadioButton, RadioGroup, Switch} from 'react-native-ui-lib';

const Choice = ({navigation}: NavigProps<null>) => {
  const [value, setValue] = useState(false);
  const [valueOne, setValueOne] = useState(false);
  const [currentValue, setCurrentValue] = useState('yes');

  return (
    <View style={styles.container}>
      <View style={tw`flex-col justify-between h-[98%]`}>
        <View style={tw`my-[20%]`}>
          <Text style={tw`my-4 font-MontserratBlack text-primary text-2xl`}>
        With whom do you want to date?
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
        </View>

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('height')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Choice;
