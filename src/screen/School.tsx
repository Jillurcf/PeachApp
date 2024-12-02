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
import InputText from '../components/inputs/InputText';

const School = ({ navigation }: NavigProps<null>) => {
    const [value, setValue] = useState(false);
  const options = [
    "Don't have children",
    'Have children',
    "Don't want children",
    'Want children',
    'Open to children',
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

        <View style={tw`my-[20%]`}>
          <Text style={tw`font-MontserratBlack text-primary text-2xl`}>
        Your school name?
          </Text>
          

          <View style={tw`h-14 my-12`}> 
            <InputText
              placeholder="e.g New York USA"
              placeholderTextColor={'black'}
              style={tw`font-MontserratRegular`}
              cursorColor={'black'}
              containerStyle={tw`border-0 bg-transparent border-b-2 border-b-black`}
              focusSTyle={tw`text-black`}
              fieldStyle={tw`text-black`}
            />
          </View>
          <View style={tw`flex-row justify-between my-8`}>
              <Text style={tw`font-MontserratBold text-primary`}>Show on your profile</Text>
              <Switch value={value} onColor={'black'} offColor={'gray'} onValueChange={setValue} />
            </View>
   
        </View>

        <View
          style={tw`z-2 flex mx-auto my-12 items-center justify-center px-[4%]`}
        >
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('study')}
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

export default School;
