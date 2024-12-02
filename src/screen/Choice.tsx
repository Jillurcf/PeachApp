import React, { useState } from 'react';
import { View, Button, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import { NavigProps } from '../interfaces/NaviProps';
import { RadioButton, RadioGroup, Switch } from 'react-native-ui-lib';

const Choice = ({ navigation }: NavigProps<null>) => {
  const [value, setValue] = useState(false);
  const [valueOne, setValueOne] = useState(false);
  const [currentValue, setCurrentValue] = useState('yes');

  return (
    <ScrollView
      contentContainerStyle={tw`flex-1 flex-col justify-between items-center mx-[4%]`} // move styles here
      style={tw`h-[95%]`}
    >
    
        <View style={tw`my-12`}>
          <Text style={tw`my-4 font-MontserratBlack text-primary text-2xl`}>
            With whom do you want to date?
          </Text>
          <View style={tw`my-6`}>
            <RadioGroup initialValue={currentValue} onValueChange={setCurrentValue}>
              <RadioButton
                color="black"
                containerStyle={tw` p-4 rounded-3xl`}
                labelStyle={tw`text-primary font-MontserratBold`}
                style={tw``}
                value={'male'}
                label={'Male'}
              />
              <RadioButton
                color="black"
                containerStyle={tw` p-4 rounded-3xl`}
                labelStyle={tw`text-primary font-MontserratBold`}
                style={tw``}
                value={'female'}
                label={'Female'}
                marginT-15
              />
              <RadioButton
                color="black"
                containerStyle={tw` p-4 rounded-3xl`}
                labelStyle={tw`text-primary font-MontserratBold`}
                style={tw``}
                value={'Other'}
                label={'Other'}
                marginT-15
              />
            </RadioGroup>
          </View>
        </View>

        <View style={tw`z-2 flex mx-auto my-12 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('height')}
              titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
              title="Continue"
              containerStyle={tw`bg-primary w-[90%] my-2 rounded-full`}
            />
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

export default Choice;
