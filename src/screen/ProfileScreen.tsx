import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import tw from '../lib/tailwind';
import {launchImageLibrary} from 'react-native-image-picker';
import * as Progress from 'react-native-progress';
import {SvgXml} from 'react-native-svg';
import {
  EditIcon,
  ProfileCameraIcon,
  SettingsIcon,
  TickIcon,
  VerifiedIcon,
} from '../assets/icons/icon';
import NormalModal from '../components/modals/NormalModal';
import {NavigProps} from '../interfaces/NaviProps';

const {width, height} = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const selectImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        const file = response.assets[0];
        setImageUri(file.uri);
        uploadImage(file);
      }
    });
  };

  const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    });

    // try {
    //   await axios.post("https://example.com/upload", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     onUploadProgress: (progressEvent) => {
    //       const percent = progressEvent.loaded / progressEvent.total;
    //       setUploadProgress(percent);
    //     },
    //   });

    //   // Reset progress after upload
    //   setTimeout(() => setUploadProgress(0), 2000);
    // } catch (error) {
    //   console.error("Upload failed:", error);
    // }
  };

  const Data = [
    {
      id: 1,
      title: 'Monthly',
      Amount: '20.00/mo',
    },
    {
      id: 2,
      title: '6 Month',
      Amount: '40.00/mo',
    },
    {
      id: 3,
      title: '12 Month',
      Amount: '60.00/mo',
    },
  ];

  const handleSubsriptionModal = () => {
    setOpenModal(true);
  };

  return (
    <ScrollView style={tw`flex-1  my-12`}>
      <View style={tw`items-center`}>
        <TouchableOpacity onPress={selectImage}>
          <View
            style={tw`w-30 h-30 rounded-full overflow-hidden justify-center items-center`}>
            {/* {imageUri ? ( */}
            <Image
              source={require('../assets/images/ProfileImg.png')}
              style={tw`w-full h-full`}
            />
            {/* ) : (
          <View style={tw`justify-center items-center bg-white w-full h-full`}>
            <Text>Select Image</Text>
          </View>
        )} */}
            {uploadProgress > 0 && uploadProgress < 1 && (
              <Progress.Circle
                progress={uploadProgress}
                size={100}
                showsText
                formatText={() => `${Math.round(uploadProgress * 100)}%`}
                style={tw`absolute`}
              />
            )}
          </View>
          <View style={tw`flex-row gap-2 items-center justify-center my-4`}>
            <Text style={tw`text-2xl font-MontserratBold text-black`}>
              Immi, 26
            </Text>
            <SvgXml xml={VerifiedIcon} width={20} height={20} />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={tw`flex-row mx-auto gap-2 w-[85%] items-center justify-center`}>
          <TouchableOpacity
            onPress={selectImage}
            style={tw`bg-white p-4 items-center justify-center rounded-lg w-4/12`}>
            <SvgXml xml={ProfileCameraIcon} width={30} height={30} />
            <Text
              style={tw`font-MontserratRegular py-1 text-black text-center`}>
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('editProfile')}
            style={tw`bg-white p-4 items-center justify-center rounded-lg w-4/12`}>
            <SvgXml xml={EditIcon} width={30} height={30} />
            <Text
              style={tw`font-MontserratRegular py-1 text-black text-center`}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('accountSettings')}
            style={tw`bg-white p-4 items-center justify-center rounded-lg w-4/12`}>
            <SvgXml xml={SettingsIcon} width={30} height={30} />
            <Text
              style={tw`font-MontserratRegular py-1 text-black text-center`}>
              Sttings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`my-4 px-[4%] flex mx-auto`}>
        <Text
          style={tw`lg:text-lg md:text-lg sm:text-sm font-MontserratRegular text-black`}>
          See Who Likes You and Start Matching Instantly on Peach!
        </Text>
      </View>
      <Text style={tw`justify-start px-[8%] text-black`}>Select your plan</Text>
      <View style={tw`flex items-center justify-center w-full`}>
        <FlatList
          horizontal
          data={Data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={handleSubsriptionModal}
                style={tw`py-12 mx-2 px-3 my-4 bg-white rounded-lg`}>
                <Text style={tw`text-md font-MontserratBold text-black`}>
                  {item.title}
                </Text>
                <Text style={tw`text-xm font-MontserratRegular text-black`}>
                  {item.Amount}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    
        <NormalModal
          visible={openModal}
          setVisible={setOpenModal}
          animationType="fade"
          containerStyle={tw`p-4 mt-[10%] border-gray-300`}>
          <View style={tw`bg-white border-gray-300 border p-4 rounded-2xl`}>
            <Text
              style={tw`text-center text-2xl font-MontserratBold text-black py-4`}>
              Your Benifits
            </Text>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <Text style={tw`text-xl font-MontserratBold text-black `}>
                Unlimited Like
              </Text>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <Text style={tw`text-xl font-MontserratBold text-black`}>
                See Who like you
              </Text>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <Text style={tw`text-xl font-MontserratBold text-black`}>
                1 Free bosst per month
              </Text>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <Text style={tw`text-xl font-MontserratBold text-black`}>
                5 free super like per week
              </Text>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <View>
                <Text style={tw`text-xl font-MontserratBold text-black`}>
                  Global match
                </Text>
                <Text style={tw`font-MontserratRegular text-black`}>
                  Connect and chat with people worldwide.
                </Text>
              </View>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <View>
                <Text style={tw`text-xl font-MontserratBold text-black`}>
                  Control your profile
                </Text>
                <Text style={tw`font-MontserratRegular text-black`}>
                  Decide what others can see about you.
                </Text>
              </View>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <View>
                <Text style={tw`text-xl font-MontserratBold text-black`}>
                  Control who see you
                </Text>
                <Text style={tw`font-MontserratRegular text-black`}>
                  Manage your visibility
                </Text>
              </View>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <View>
                <Text style={tw`text-xl font-MontserratBold text-black`}>
                  Control who follow you
                </Text>
                <Text style={tw`font-MontserratRegular text-black`}>
                  Find the type of people you are looking for
                </Text>
              </View>
            </View>
            <View style={tw`flex-row gap-4`}>
              <SvgXml xml={TickIcon} width={20} height={20} />
              <Text style={tw`text-xl font-MontserratBold text-black`}>
                Add free experiences
              </Text>
            </View>
          </View>

          <View
            style={tw`flex-row w-[60%] mx-auto justify-between items-center`}>
            <TouchableOpacity
              onPress={() => setOpenModal(false)}
              style={tw`mt-4 bg-gray-600 py-2 px-6 rounded-lg`}>
              <Text style={tw`text-white text-center`}>Select</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setOpenModal(false)}
              style={tw`mt-4 bg-red-400 py-2 px-6 rounded-lg`}>
              <Text style={tw`text-white text-center`}>Close</Text>
            </TouchableOpacity>
          </View>
        </NormalModal>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
