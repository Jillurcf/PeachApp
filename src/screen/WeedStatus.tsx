import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import { NavigProps } from '../interfaces/NaviProps';
import { RadioButton, Switch } from 'react-native-ui-lib';
import { SvgXml } from 'react-native-svg';
import { LeftArrow } from '../assets/icons/icon';

const WeedStatus = ({ navigation }: NavigProps<null>) => {
    const [value, setValue] = useState(false);
  const options = [
    "Yes",
    'Occasionally',
    "No",
   'Prefer not to say',
    
    
  ];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Toggle option selection
  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Select a random option
  const selectRandomOption = () => {
    const unselectedOptions = options.filter(
      (option) => !selectedOptions.includes(option)
    );
    if (unselectedOptions.length > 0) {
      const randomOption =
        unselectedOptions[
          Math.floor(Math.random() * unselectedOptions.length)
        ];
      setSelectedOptions((prev) => [...prev, randomOption]);
    }
  };

  return (
    <ScrollView contentContainerStyle={tw`flex-col justify-between h-[98%] px-[4%]`}>
    
        <View style={tw`my-[10%]`}>
        <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={tw`flex-row my-6 gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
          <View style={tw`w-[90%]`}>
          <Text style={tw`font-MontserratBlack text-primary text-2xl`}>
         Do you smoke weed?
          </Text>
          
          </View>
          </TouchableOpacity>
         
          

          <View style={tw`my-8 flex-row flex-wrap gap-1`}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => toggleOption(option)}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 30,
                  backgroundColor: selectedOptions.includes(option)
                    ? 'black'
                    : 'lightgray',
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: selectedOptions.includes(option) ? 'white' : 'black',
                    fontSize: 14,
                    textAlign: 'center',
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={tw`flex-row justify-between`}>
              <Text style={tw`font-MontserratBold text-primary`}>Show on your profile</Text>
              <Switch value={value} onColor={'black'} offColor={'gray'} onValueChange={setValue} />
            </View>
   
        </View>

        <View
          style={tw`z-2 flex mx-auto my-12 items-center justify-center px-[4%]`}
        >
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('drugStatus')}
              titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
              title="Continue"
              containerStyle={tw`bg-primary w-[90%] my-2 rounded-full`}
            />
          </View>
        </View>
   

      <StatusBar backgroundColor={'gray'} translucent />
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

export default WeedStatus;
