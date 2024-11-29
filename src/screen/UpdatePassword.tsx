import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  Button,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import tw from 'twrnc'; // Assuming Tailwind with 'twrnc' setup
import {CloseIcon, LeftArrow, ProfileCameraIcon} from '../assets/icons/icon';
import InputText from '../components/inputs/InputText';

const UpdatePassword = ({navigation}) => {
  const [pushEnabled, setPushEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [inAppEnabled, setInAppEnabled] = useState(false);

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Header */}
      <View style={tw`flex-row items-center my-6 p-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={tw`flex-row gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
            <Text style={tw`text-lg font-bold`}> Account settings</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <View>
        <Text
          style={tw`font-MontserratBold font-bold text-black text-2xl px-[4%]`}>
          Create a secure password
        </Text>
      </View>

      {/* Notification Settings */}
      <View style={tw`p-4 bg-white mt-4 rounded-lg`}>
        <Text style={tw`text-lg font-MontserratBold mb-4`}>
          Use at least 8 characters
        </Text>
        <Text style={tw`text-lg font-MontserratBold mb-4`}>
          Use a mix of letters, numbers, and special
        </Text>
        <Text style={tw`text-lg font-MontserratBold mb-4`}>
          character (e.g. : #$!%)
        </Text>
        <Text style={tw`text-lg font-MontserratBold mb-4`}>
          Try combining words and symbols into a
        </Text>
        <Text style={tw`text-lg font-MontserratBold mb-4`}>unique phrase</Text>
      </View>

      {/* Update Password */}
      <View style={tw`relative`}>
        <SvgXml
          style={tw`absolute z-30 top-[40%] left-[85%]`}
          xml={CloseIcon}
          width={20}
          height={20}
        />
        <View style={tw`relative w-[90%] mx-auto my-6 h-14`}>
          <InputText cursorColor={'black'} containerStyle={tw`w-full h-14`} />
        </View>
      </View>
      <View style={tw`relative`}>
        <SvgXml
          style={tw`absolute z-30 top-[40%] left-[85%]`}
          xml={CloseIcon}
          width={20}
          height={20}
        />
        <View style={tw`relative w-[90%] mx-auto my-6 h-14`}>
          <InputText cursorColor={'black'} containerStyle={tw`w-full h-14`} />
        </View>
      </View>
     

      {/* Save Changes Button */}
      <View style={tw`p-4`}>
        <TouchableOpacity style={tw`bg-black py-3 rounded-full`}>
          <Text style={tw`text-center text-white font-bold`}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdatePassword;
