import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
  Button,
  Image,
  FlatList,
} from 'react-native';
import TButton from '../components/buttons/TButton';
import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import ImageCropPicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import IButton from '../components/buttons/IButton';
import {
  Gallery,
  PlusIcon,
  StillCamera,
  VideoCam,
  BulbIcon,
} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';

const UploadPhotos = ({navigation}: NavigProps<null>) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [capturedVideo, setCapturedVideo] = useState<string | null>(null); // Store captured video path
  const options = ['Parties'];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option],
    );
  };

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

  const openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setSelectedImages(prev => [...prev, image.path]);
      })
      .catch(error => {
        if (error.message !== 'User cancelled image selection') {
          Alert.alert('Error', error.message || 'Something went wrong');
        }
      });
  };

  const captureVideo = () => {
    ImageCropPicker.openCamera({
      mediaType: 'video', // Specify video capture
    })
      .then(video => {
        setCapturedVideo(video.path); // Store the captured video path
      })
      .catch(error => {
        if (error.message !== 'User cancelled image selection') {
          Alert.alert('Error', error.message || 'Something went wrong');
        }
      });
  };

  const clearSelection = () => {
    setSelectedImages([]);
    setCapturedVideo(null);
  };

  return (
    <View style={styles.container}>
      <View style={tw`px-[4%]`}>
        <View style={tw`my-[20%]`}>
          <Text style={tw`font-MontserratBlack text-primary text-2xl`}>
            Pair with photos & videos with prompts.
          </Text>

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

            <View style={styles.spacing} />
            {selectedImages.length > 0 && (
              <>
                {/* <FlatList
                  data={selectedImages}
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  renderItem={({item}) => (
                    <Image source={{uri: item}} style={styles.image} />
                  )}
                />
                <View style={styles.spacing} /> */}
              </>
            )}
            {capturedVideo && (
              <>
                <Video
                  source={{uri: capturedVideo}}
                  style={styles.video}
                  controls
                  resizeMode="contain"
                />
                <View style={styles.spacing} />
              </>
            )}
            <TButton
              title="Clear Selection"
              containerStyle={tw`bg-secondary`}
              titleStyle={tw`text-primary font-MontserratBold`}
              onPress={clearSelection}
            />
            {/* <Button title="Clear Selection" onPress={clearSelection} /> */}
          </View>
          <View
            style={tw`bg-gray-100 rounded-lg p-5 border border-gray-300 relative`}>
            <SvgXml
              style={tw`absolute top-[-50%] left-[50%]`}
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

        <View
          style={tw`z-2 flex mx-auto mb-0 top-0 items-center justify-center px-[4%]`}>
          <View style={tw`my-2 flex items-center justify-center mx-auto`}>
            <TButton
              onPress={() => navigation?.navigate('ethinicity')}
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  spacing: {
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  video: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
});

export default UploadPhotos;
