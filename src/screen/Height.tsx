import React, {useState} from 'react';
import {View, Button, StyleSheet, StatusBar, Text} from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {RadioButton, RadioGroup, Switch, WheelPicker} from 'react-native-ui-lib';

const Height = ({navigation}: NavigProps<null>) => {
  const [value, setValue] = useState(false);
  const [valueOne, setValueOne] = useState(false);
  const [currentValue, setCurrentValue] = useState('yes');

  return (
    <View style={styles.container}>
      <View style={tw`flex-col justify-between h-[98%]`}>
        <View style={tw`my-[20%]`}>
          <Text style={tw`my-4 font-MontserratBlack text-primary text-2xl`}>
            How tall you are?
          </Text>
          <View style={tw`my-12`}>
            <WheelPicker
              items={[
                {label: "5.3' (161 cm)", value: "5.3' (161 cm)"},
                {label: "5.4' (161 cm)", value: "5.4' (161 cm)"},
                {label: "5.5' (161 cm)", value: "5.5' (161 cm)"},
                {label: "5.6' (161 cm)", value: "5.6' (161 cm)"},
                {label: "5.7' (161 cm)", value: "5.7' (161 cm)"},
                {label: "5.8' (161 cm)", value: "5.8' (161 cm)"},
                {label: "5.9' (161 cm)", value: "5.9' (161 cm)"},
                {label: "5.10' (161 cm)", value: "5.10' (161 cm)"},
                {label: "5.11' (161 cm)", value: "5.311 (161 cm)"},
                {label: "5.12' (161 cm)", value: "5.3'12(161 cm)"},
                {label: "5.13' (161 cm)", value: "5.3' 13161 cm)"},
                {label: "5.14' (161 cm)", value: "5.3' (1461 cm)"},
                {label: "5.15' (161 cm)", value: "5.3' (1151 cm)"},
              
              ]}
              initialValue={'yes'}
              onChange={() => console.log('changed')}
            />
          </View>
        </View>

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('passion')}
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

export default Height;
