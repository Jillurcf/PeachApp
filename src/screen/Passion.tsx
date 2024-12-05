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
import { SvgXml } from 'react-native-svg';
import { LeftArrow } from '../assets/icons/icon';

const Passion = ({ navigation }: NavigProps<null>) => {
  const options = [
    'Parties',
    'Movies',
    'Street foods',
    'Motorcycles',
    'Podcast',
    'Swimming',
    'Yoga',
    'Vegetarian',
    'Astrology',
    'Voguing',
    'Cooking',
    'Fashion',
    'Gardening',
    'Reading',
    'Craft Beer',
    'Tango',
    'Gamer',
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
    <ScrollView contentContainerStyle={tw`flex-col justify-between h-[95%] px-[4%]`}>
    
        <View style={tw`my-[10%]`}>
        <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={tw`flex-row my-6 gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
            <Text style={tw`font-MontserratBlack text-primary  text-2xl`}>
            What is your passion?
            </Text>
          </TouchableOpacity>
          <Text style={tw`font-MontserratRegular text-primary text-sm`}>
            Let everyone know what you are passionate about by adding it to
            your profile.
          </Text>

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

   
        </View>

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}
        >
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('ethinicity')}
              titleStyle={tw`text-white font-MontserratBold text-center mx-auto`}
              title="Continue 3/5"
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

export default Passion;
