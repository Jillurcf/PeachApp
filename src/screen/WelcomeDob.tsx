import React, {useState} from 'react';
import {View, Button, StyleSheet, StatusBar, Text, Image} from 'react-native';
import DatePicker from 'react-native-date-picker';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {warningRed} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';

const WelcomeDob = ({navigation}: NavigProps<null>) => {
  const [date, setDate] = useState(new Date());
  const [isPickerOpen, setPickerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={tw`flex-col justify-between h-[98%] px-[4%]`}>
        <View style={tw`my-[20%]`}>
          <Text style={tw`font-MontserratBlack text-primaryText text-2xl`}>
            What is your date of birth
          </Text>

          <View style={tw`my-[20%] flex items-center justify-center border-b-2 border-primaryText`}>
            <DatePicker
              open={true}
              date={date}
              onConfirm={selectedDate => {
                setPickerOpen(false);
                setDate(selectedDate);
              }}
              onCancel={() => setPickerOpen(false)}
              minuteInterval={15} // Allows selecting minutes in 5-minute intervals
              mode="datetime" // Picker mode: 'date', 'time', or 'datetime'
            />
          </View>
          <Text
            style={tw`font-MontserratBold text-primary text-2xl text-center`}>
            Age: 27
          </Text>
          <View style={tw`flex-row gap-4 my-6`}>
            <SvgXml xml={warningRed} width={25} height={25} />
            <Text style={tw`font-MontserratRegular`}>
              Age can’t be changed later
            </Text>
          </View>
        </View>

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('WelcomeNotification')}
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

export default WelcomeDob;
