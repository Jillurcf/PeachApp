import React, {useState} from 'react';
import {View, Button, StyleSheet, StatusBar, Text, Image, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {LeftArrow, warningRed} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeDob = ({navigation}: NavigProps<null>) => {
  const [date, setDate] = useState(new Date());
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (
    <ScrollView contentContainerStyle={tw`flex-1 flex-col justify-between h-[95%] px-[4%]`}>
      
        <View style={tw`my-[10%`}>
        <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={tw`flex-row my-[10%] gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
            <Text style={tw`font-MontserratBlack text-primary  text-2xl`}>
            What is your date of birth
            </Text>
          </TouchableOpacity>

          <View style={tw`flex items-center my-4 justify-center `}>
            <DatePicker
           
              open={true}
              date={date}
              onConfirm={selectedDate => {
                setPickerOpen(false);
                setDate(selectedDate);
              }}
              onCancel={() => setPickerOpen(false)}
              minuteInterval={15} // Allows selecting minutes in 5-minute intervals
              mode="datetime" // Picker mode: 'date', 'time', or 'datetime'\
              textColor="#007AFF" 
              
             style={tw`bg-white`}
            />
          </View>
          <Text
            style={tw`font-MontserratBold my-4 text-primary text-2xl text-center`}>
            Age: 27
          </Text>
          <View style={tw`flex-row gap-4 my-2`}>
            <SvgXml xml={warningRed} width={25} height={25} />
            <Text style={tw`text-black font-MontserratRegular`}>
              Age can’t be changed later
            </Text>
          </View>
        </View>

        <View
          style={tw`z-2 flex mx-auto my-12 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('WelcomeNotification')}
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

export default WelcomeDob;
