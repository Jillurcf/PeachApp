import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet, StatusBar, Text, ScrollView} from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {RadioButton, RadioGroup, Switch, WheelPicker} from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { LeftArrow } from '../assets/icons/icon';
import MMKVStorage from 'react-native-mmkv-storage';


type Props = {};
const MMKV = new MMKVStorage.Loader().initialize();
const Height = ({navigation}: NavigProps<null>) => {
  const [value, setValue] = useState(false);
  const [valueOne, setValueOne] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  console.log(currentValue.toString().slice(0, 4))

   useEffect(() => {
      const storedData = MMKV.getString('dataList');
      console.log('storedData', storedData);
  
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (parsedData?.height) {
          setValue(parsedData?.height); // Ensure conversion to Date object
        }
      }
    }, []);
    const handleContinue = () => {
      // Retrieve existing stored data
      const storedData = MMKV.getString('dataList');
      let dataList = [];
  
      if (storedData) {
        try {
          dataList = JSON.parse(storedData);
        } catch (error) {
          console.error('Error parsing stored data:', error);
        }
      }
  
      // Ensure dataList is an array and append new data
      if (!Array.isArray(dataList)) {
        dataList = [];
      }
  
      // Add or update "dob" entry
      const updatedDataList = [...dataList, {height: currentValue}];
  
      // Save updated data
      MMKV.setString('dataList', JSON.stringify(updatedDataList));
  
      // Navigate to the next screen
       navigation?.navigate('passion')
    };
  return (
    <View style={tw`flex-1 flex-col justify-between h-[98%] px-[4%]`}>
     
        <View style={tw``}>
        <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={tw`flex-row my-6 gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
            <Text style={tw`font-MontserratBlack text-primary  text-2xl`}>
            How tall you are?
            </Text>
          </TouchableOpacity>
          <Text style={tw`my-6 font-MontserratBlack text-primary text-2xl`}>
         
          </Text>
          <View style={tw`my-6`}>
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
              initialValue={''}
              onChange={(value) => setCurrentValue(value)}
              // itemHeight={200}
              // labelStyle={tw`text-red-600`}
 
              
            />
          </View>
        </View>

        <View
          style={tw`z-2 flex mx-auto my-12 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
            onPress={handleContinue}
              titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
              title="Continue"
              containerStyle={tw`bg-primary w-[90%] my-2 rounded-full`}
            />
          </View>
        </View>


      <StatusBar backgroundColor={'gray'} translucent={false} />
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
