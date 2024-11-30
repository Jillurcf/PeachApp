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
import {LeftArrow, ProfileCameraIcon} from '../assets/icons/icon';

const AccountSettings = ({navigation}) => {
  const [pushEnabled, setPushEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [inAppEnabled, setInAppEnabled] = useState(false);

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Header */}
      <View style={tw`flex-row items-center my-6 p-4`}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <View style={tw`flex-row gap-4`}>
            <SvgXml xml={LeftArrow} width={25} height={25} />
            <Text style={tw`text-lg font-MontserratBold text-black`}> Account settings</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Profile Picture */}
      <View style={tw`items-center mt-4`}>
        <View style={tw`relative`}>
          <Image
            source={require('../assets/images/ProfileImg.png')}
            style={tw`w-24 h-24 rounded-full`}
          />
          <TouchableOpacity
            style={tw`absolute bottom-0 right-0 bg-white p-2 rounded-full`}>
            <SvgXml xml={ProfileCameraIcon} width={20} height={20} />
          </TouchableOpacity>
        </View>
        <Text style={tw`mt-2 text-sm font-MontserratRegular text-gray-500`}>
          Upload profile picture or choose avatar
        </Text>
      </View>

      {/* Notification Settings */}
      <View style={tw`p-4 bg-white mt-4 rounded-lg`}>
        <Text style={tw`text-lg font-MontserratBold text-black mb-4`}>Notification Settings</Text>

        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-black font-MontserratRegular`}>Push Notifications</Text>
          <Switch 
             trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}  // Custom track colors
             thumbColor={emailEnabled ? '#FFF' : '#6B7280'}  // Custom thumb color
          value={pushEnabled} onValueChange={setPushEnabled} />
        </View>

        <View style={tw`flex-row justify-between items-center mb-4`}>
          <Text style={tw`text-black font-MontserratRegular`}>E-mail Notifications</Text>
          <Switch 
             trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}  // Custom track colors
             thumbColor={emailEnabled ? '#FFF' : '#6B7280'}  // Custom thumb color
          value={emailEnabled} onValueChange={setEmailEnabled} />
        </View>

        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-black`}>In-app Notifications</Text>
          <Switch 
           trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}  // Custom track colors
           thumbColor={emailEnabled ? '#FFF' : '#6B7280'}  // Custom thumb color
          value={inAppEnabled} onValueChange={setInAppEnabled} />
        </View>
      </View>

      {/* Update Password */}
      <TouchableOpacity onPress={() => navigation.navigate('updatePassword')} style={tw`p-4 mt-2`}>
        <Text style={tw`text-blue-500 text-center font-bold`}>
          Update Password
        </Text>
      </TouchableOpacity>

      {/* Save Changes Button */}
      <View style={tw`p-4`}>
        <TouchableOpacity style={tw`bg-black py-3 rounded-full`}>
          <Text style={tw`text-center text-white font-bold`}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountSettings;
