import React, {useEffect, useState} from 'react';
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
import ImageCropPicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import IButton from '../components/buttons/IButton';
import {
  Gallery,
  StillCamera,
  VideoCam,
  BulbIcon,
  CrossIcon,
  LeftArrow, // Add your close icon here
} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UploadPhotos = ({navigation}: NavigProps<null>) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [capturedVideo, setCapturedVideo] = useState<string | null>(null);

  // Fetch images from AsyncStorage on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const savedImages = await AsyncStorage.getItem('images');
        if (savedImages) {
          setSelectedImages(JSON.parse(savedImages));
        }
      } catch (error) {
        console.log('Error fetching images from AsyncStorage:', error);
      }
    };

    fetchImages();
  }, []);

  // Open gallery to select images
  const openGallery = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      cropping: true,
    })
      .then(images => {
        const imagePaths = images.map((image: any) => image.path);
        setSelectedImages(prev => [...prev, ...imagePaths]);
      })
      .catch(error => {
        if (error.message !== 'User cancelled image selection') {
          Alert.alert('Error', error.message || 'Something went wrong');
        }
      });
  };

  // Open camera to capture images
  const openCamera = async () => {
    try {
      // Open the camera and crop the image
      const image = await ImageCropPicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
      });

      // Retrieve saved images from AsyncStorage
      const savedImages = await AsyncStorage.getItem('images');
      const imagesArray = savedImages ? JSON.parse(savedImages) : [];

      // Update local state and AsyncStorage with the new image
      const updatedImages = [...imagesArray, image.path];
      setSelectedImages(updatedImages);
      await AsyncStorage.setItem('images', JSON.stringify(updatedImages));

      Alert.alert('Success', 'Image saved locally!');
    } catch (error) {
      console.error(error);
    }
  };

  // Capture video
  const captureVideo = () => {
    ImageCropPicker.openCamera({
      mediaType: 'video',
    })
      .then(video => {
        setCapturedVideo(video.path);
      })
      .catch(error => {
        if (error.message !== 'User cancelled image selection') {
          Alert.alert('Error', error.message || 'Something went wrong');
        }
      });
  };

  // Remove a specific image by index
  const handleRemoveImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  // Clear the captured video
  const clearCapturedVideo = () => {
    setCapturedVideo(null);
  };

  // Clear all selections
  const clearSelection = () => {
    setSelectedImages([]);
    setCapturedVideo(null);
  };

  return (
    <ScrollView
      contentContainerStyle={tw`flex-1 h-[95%] items-center justify-between px-4`}>
      <View style={tw`my-10`}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={tw`flex-row gap-4`}>
          <SvgXml xml={LeftArrow} width={25} height={25} />
          <Text style={tw`font-MontserratBlack text-primary text-2xl`}>
            Pair with photos & videos with prompts.
          </Text>
        </TouchableOpacity>

        {/* Media Upload */}
        <View style={tw`flex items-center justify-center my-12`}>
          <View style={tw`flex-row gap-6`}>
            <IButton
              containerStyle={tw`p-4 rounded-full`}
              svg={Gallery}
              onPress={openGallery}
            />
            <IButton
              containerStyle={tw`p-4 rounded-full`}
              svg={StillCamera}
              onPress={openCamera}
            />
            <IButton
              containerStyle={tw`p-4 rounded-full`}
              svg={VideoCam}
              onPress={captureVideo}
            />
          </View>
          <Text style={tw`font-MontserratRegular my-2`}>
            Four Images required
          </Text>

          {/* Display selected images */}
          {selectedImages.length > 0 && (
            <View style={tw`flex-row flex-wrap gap-2 my-4`}>
              {selectedImages.map((image, index) => (
                <View key={index} style={tw`relative`}>
                  <TouchableOpacity
                    onPress={() => navigation?.navigate('promptScreen')}>
                    <Image
                      source={{uri: image}}
                      style={tw`w-24 h-24 rounded-lg`}
                    />
                  </TouchableOpacity>
                  <IButton
                    containerStyle={tw`absolute top-[-8px] right-[-8px] bg-red-500 rounded-full p-1`}
                    svg={CrossIcon} // Replace `CrossIcon` with your cross icon
                    onPress={() => handleRemoveImage(index)}
                  />
                </View>
              ))}
            </View>
          )}

          <View style={tw`my-4`} />
          {/* Display captured video */}
          {capturedVideo && (
            <View style={tw`relative`}>
              <Video
                source={{uri: capturedVideo}}
                style={tw`w-72 h-48 mt-2`}
                controls
                resizeMode="contain"
              />
              <IButton
                containerStyle={tw`absolute top-[-8px] right-[-8px] bg-red-500 rounded-full p-1`}
                svg={CrossIcon} // Replace `CrossIcon` with your cross icon
                onPress={clearCapturedVideo}
              />
            </View>
          )}

          {/* Clear selection button */}
          {/* <TButton
            title="Clear Selection"
            containerStyle={tw`bg-secondary p-2 mt-2`}
            titleStyle={tw`text-primary font-MontserratBold`}
            onPress={clearSelection}
          /> */}
        </View>

        <View
          style={tw`bg-gray-100 rounded-lg p-5 border border-gray-300 relative`}>
          <SvgXml
            style={tw`absolute top-[-25px] left-[50%]`}
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
      <View style={tw`flex mb-6 my-12 items-center justify-center w-full`}>
        <TButton
          onPress={() => navigation?.navigate('promptScreen')}
          titleStyle={tw`text-white font-MontserratBold text-center`}
          title="Continue"
          containerStyle={tw`bg-primary w-[90%] rounded-full`}
        />
      </View>

      <StatusBar backgroundColor={'gray'} translucent={false} />
    </ScrollView>
  );
};

export default UploadPhotos;
