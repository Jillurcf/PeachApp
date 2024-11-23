import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import PromptImg from '../assets/images/promptImg.png';
import {
   BulbIcon,
 
} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import DropdownComponent from '../components/DropDown';

const PromptScreen = ({navigation}: NavigProps<null>) => {
  return (
    <ScrollView
      style={tw`flex-1`}
      contentContainerStyle={tw`items-center justify-center px-4`}>
      <View style={tw`my-12`}>
        <View style={tw`flex-row justify-between m-[4%] p`}>
            <TouchableOpacity onPress={() => navigation?.navigate('uploadPhotos')}>
                <Text style={tw`font-MontserratBold`}>Cancel</Text>
            </TouchableOpacity>
            <Text style={tw`font-MontserratBold text-primary text-xl`}>Add Media</Text>
            <TouchableOpacity onPress={()=> navigation?.navigate('likeSendingScreen')}>
                <Text style={tw`font-MontserratBold text-blue-700`}>Done</Text>
            </TouchableOpacity>
        </View>
        <View style={tw`w-96`}>
          <DropdownComponent />
        </View>
        <View
          style={tw`border border-gray-100 h-80 mx-[4%] rounded-lg overflow-hidden`}>
          <Image
            style={tw`w-full h-full`}
            source={PromptImg}
            resizeMode="cover"
          />
        </View>

        <View
          style={tw`bg-gray-100 mx-4 my-12 rounded-lg p-5 border border-gray-300 relative`}>
          <SvgXml
            style={tw`absolute top-[-25px] left-[50%] translate-x-[-50%]`}
            width={50}
            height={50}
            xml={BulbIcon}
          />
          <Text style={tw`text-center text-gray-600 text-base`}>
            Tap a photo to add a prompt and make your profile stand out even
            more
          </Text>
        </View>
      </View>

      {/* Continue button */}
      <View style={tw`flex items-center justify-center w-full`}>
        <TButton
          onPress={() => navigation?.navigate('uploadPhotos')}
          titleStyle={tw`text-white font-MontserratBold text-center`}
          title="1/6 add more photos"
          containerStyle={tw`bg-primary w-[90%] my-2 rounded-full`}
        />
      </View>

      <StatusBar backgroundColor={'gray'} translucent />
    </ScrollView>
  );
};

export default PromptScreen;
