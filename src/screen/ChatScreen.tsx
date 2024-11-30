// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   FlatList,
//   Text,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import Video from 'react-native-video'; // Ensure this is installed: npm install react-native-video
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
// import io from 'socket.io-client';
// import tw from 'twrnc'; // Tailwind for React Native
// import {
//   AttachmentIcon,
//   KibubIcon,
//   LeftArrow,
//   StillCamera,
//   VideoCam,
// } from '../assets/icons/icon';
// import {SvgXml} from 'react-native-svg';
// import TButton from '../components/buttons/TButton';
// import {Avatar} from 'react-native-ui-lib';

// const socket = io('http://localhost:3000'); // Replace with your server's IP or domain

// const ChatScreen = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: 'Hello! How are you?',
//       user: 'Friend',
//       createdAt: new Date().setMinutes(new Date().getMinutes() - 5),
//       image: null,
//       video: null,
//     },
//     {
//       text: 'Check out this video!',
//       user: 'Friend',
//       createdAt: new Date().setMinutes(new Date().getMinutes() - 3),
//       image: null,
//       video: 'https://www.example.com/sample-video.mp4', // Example static video URL
//     },
//   ]); // Static incoming messages
//   const [text, setText] = useState(''); // For input field
//   const [mediaUri, setMediaUri] = useState(null); // For holding selected image or video URI
//   const [mediaType, setMediaType] = useState(null); // 'image' or 'video'

//   useEffect(() => {
//     // Listen for new messages from the server
//     socket.on('receiveMessage', message => {
//       setMessages(prev => [...prev, message]);
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (text.trim() || mediaUri) {
//       const message = {
//         text,
//         user: 'User1', // Replace this with dynamic user data
//         createdAt: new Date(),
//         image: mediaType === 'image' ? mediaUri : null,
//         video: mediaType === 'video' ? mediaUri : null,
//       };

//       // Send message to the server
//       socket.emit('sendMessage', message);

//       // Update local message state
//       setMessages(prev => [...prev, message]);

//       // Clear input field and media
//       setText('');
//       setMediaUri(null);
//       setMediaType(null);
//     }
//   };

//   const pickMedia = type => {
//     launchImageLibrary(
//       {
//         mediaType: type,
//         quality: 1,
//       },
//       response => {
//         if (response.didCancel) {
//           console.log('User cancelled media picker');
//         } else if (response.errorMessage) {
//           console.error('MediaPicker Error: ', response.errorMessage);
//         } else if (response.assets && response.assets.length > 0) {
//           setMediaUri(response.assets[0].uri); // Set the selected media URI
//           setMediaType(type);
//         }
//       },
//     );
//   };

//   const capturePhoto = () => {
//     launchCamera(
//       {
//         mediaType: 'photo',
//         quality: 1,
//         saveToPhotos: true, // Optional: Save the photo to the device's photo library
//       },
//       response => {
//         if (response.didCancel) {
//           console.log('User cancelled photo capture');
//         } else if (response.errorMessage) {
//           console.error('Camera Error: ', response.errorMessage);
//         } else if (response.assets && response.assets.length > 0) {
//           setMediaUri(response.assets[0].uri); // Set the captured photo URI
//           setMediaType('image');
//         }
//       },
//     );
//   };

//   const recordVideo = () => {
//     launchCamera(
//       {
//         mediaType: 'video',
//         quality: 1,
//       },
//       response => {
//         if (response.didCancel) {
//           console.log('User cancelled video recording');
//         } else if (response.errorMessage) {
//           console.error('Camera Error: ', response.errorMessage);
//         } else if (response.assets && response.assets.length > 0) {
//           setMediaUri(response.assets[0].uri); // Set the recorded video URI
//           setMediaType('video');
//         }
//       },
//     );
//   };

//   return (
//     <View style={tw`flex-1 bg-gray-100`}>
//       <View style={tw`flex-row items-center justify-between px-[4%] my-4`}>
//         <SvgXml xml={LeftArrow} width={25} height={25} />
//         <View style={tw`flex-row items-center gap-2 py-2 `}>
//           <View style={tw`relative`}>
//             <Avatar
//               source={require('../assets/images/promptImg.png')}
//               size={50}
//               containerStyle={tw`mr-4`}
//             />

//             <View
//               style={tw`w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-4`}
//             />
//           </View>
//           <Text style={tw`text-black font-MontserratRegular`}>Maryland Winkles</Text>
//         </View>
//         <TouchableOpacity>
//         <SvgXml xml={KibubIcon} width={20} height={20}/>
//         </TouchableOpacity>
//       </View>
//       {/* Message List */}
//       <FlatList
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View
//             style={[
//               tw`mb-3 p-3 rounded-lg max-w-3/4`,
//               item.user === 'User1'
//                 ? tw`bg-blue-200 self-end`
//                 : tw`bg-gray-200 self-start`,
//             ]}>
//             <Text style={tw`font-MontserratBold text-black`}>{item.user}</Text>
//             {item.image && (
//               <Image
//                 source={{uri: item.image}}
//                 style={tw`h-40 w-full rounded-lg my-2`}
//                 resizeMode="cover"
//               />
//             )}
//             {item.video && (
//               // <Video
//               //   source={{ uri: item.video }}
//               //   style={tw`h-40 w-full rounded-lg my-2`}
//               //   resizeMode="cover"
//               //   controls
//               // />
//               <SvgXml xml={VideoCam} width={20} height={20} />
//             )}
//             <Text style={tw`text-black font-MontserratRegular`}>{item.text}</Text>
//             <Text style={tw`text-xs text-black mt-2`}>
//               {new Date(item.createdAt).toLocaleTimeString()}
//             </Text>
//           </View>
//         )}
//         contentContainerStyle={tw`p-4`}
//       />

//       {/* Input and Send Button */}
//       <View
//         style={tw`flex-row items-center mx-[4%] p-[4%] border-t border-gray-300`}>
//         {/* Attach Media Button */}
//         <TouchableOpacity onPress={capturePhoto} style={tw`mr-3`}>
//           <SvgXml xml={StillCamera} width={20} height={20} />
//         </TouchableOpacity>

//         {/* Camera Button */}
//         <TouchableOpacity onPress={recordVideo} style={tw`mr-3`}>
//           <SvgXml xml={VideoCam} width={20} height={20} />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => pickMedia('video')} style={tw`mr-3`}>
//           <SvgXml xml={AttachmentIcon} width={20} height={20} />
//         </TouchableOpacity>
//         <View style={tw`flex-row w-[75%] gap-1`}>
//           <TextInput
//             style={tw`flex-1 h-10 border border-gray-400 rounded-2xl px-3`}
//             placeholder="Type a message"
//             value={text}
//             onChangeText={setText}
//           />
//           <TouchableOpacity
//             onPress={sendMessage}
//             style={tw`bg-gray-400 py-1 px-2 rounded-2xl`}>
//             <Text style={tw`text-white text-lg font-MontserratBold`}>Send</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Preview Selected Media */}
//       {mediaUri && mediaType === 'image' && (
//         <View style={tw`flex-row items-center p-3`}>
//           <Image
//             source={{uri: mediaUri}}
//             style={tw`h-20 w-20 rounded-lg`}
//             resizeMode="cover"
//           />
//           <Button title="Remove" onPress={() => setMediaUri(null)} />
//         </View>
//       )}
//       {mediaUri && mediaType === 'video' && (
//         <View style={tw`flex-row items-center p-3`}>
//           <Video
//             source={{uri: mediaUri}}
//             style={tw`h-40 w-full rounded-lg`}
//             resizeMode="cover"
//             controls
//           />
//           <SvgXml xml={VideoCam} width={20} height={20} />
//           <Button title="Remove" onPress={() => setMediaUri(null)} />
//         </View>
//       )}
//     </View>
//   );
// };

// export default ChatScreen;

import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Video from 'react-native-video'; // Ensure this is installed: npm install react-native-video
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import io from 'socket.io-client';
import tw from 'twrnc'; // Tailwind for React Native
import {AttachmentIcon, StillCamera, VideoCam} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import TButton from '../components/buttons/TButton';

const socket = io('http://localhost:3000'); // Replace with your server's IP or domain

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Hello! How are you?',
      user: 'Friend',
      createdAt: new Date().setMinutes(new Date().getMinutes() - 5),
      image: null,
      video: null,
    },
    {
      text: 'Check out this video!',
      user: 'Friend',
      createdAt: new Date().setMinutes(new Date().getMinutes() - 3),
      image: null,
      video: 'https://www.example.com/sample-video.mp4', // Example static video URL
    },
  ]); // Static incoming messages
  const [text, setText] = useState(''); // For input field
  const [mediaUri, setMediaUri] = useState(null); // For holding selected image or video URI
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'

  useEffect(() => {
    // Listen for new messages from the server
    socket.on('receiveMessage', message => {
      setMessages(prev => [...prev, message]);
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (text.trim() || mediaUri) {
      const message = {
        text,
        user: 'User1', // Replace this with dynamic user data
        createdAt: new Date(),
        image: mediaType === 'image' ? mediaUri : null,
        video: mediaType === 'video' ? mediaUri : null,
      };

      // Send message to the server
      socket.emit('sendMessage', message);

      // Update local message state
      setMessages(prev => [...prev, message]);

      // Clear input field and media
      setText('');
      setMediaUri(null);
      setMediaType(null);
    }
  };

  async function requestCameraPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'This app needs access to your camera.',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }

  const pickMedia = type => {
    launchImageLibrary(
      {
        mediaType: type,
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled media picker');
        } else if (response.errorMessage) {
          console.error('MediaPicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setMediaUri(response.assets[0].uri); // Set the selected media URI
          setMediaType(type);
        }
      },
    );
  };

  const capturePhoto = async () => {
    // Request camera permission before launching camera
    await requestCameraPermission();

    launchCamera(
      {
        mediaType: 'photo',
        quality: 1,
        saveToPhotos: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled photo capture');
        } else if (response.errorMessage) {
          console.error('Camera Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setMediaUri(response.assets[0].uri); // Set the captured photo URI
          setMediaType('image'); // Set the media type as 'image'
        }
      },
    );
  };

  const recordVideo = async () => {
    // Request camera permission before recording video
    await requestCameraPermission();

    launchCamera(
      {
        mediaType: 'video',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled video recording');
        } else if (response.errorMessage) {
          console.error('Camera Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setMediaUri(response.assets[0].uri); // Set the recorded video URI
          setMediaType('video'); // Set the media type as 'video'
        }
      },
    );
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      {/* Message List */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View
            style={[
              tw`mb-3 p-3 rounded-lg max-w-3/4`,
              item.user === 'User1'
                ? tw`bg-blue-200 self-end`
                : tw`bg-gray-200 self-start`,
            ]}>
            <Text style={tw`font-bold`}>{item.user}</Text>
            {item.image && (
              <Image
                source={{uri: item.image}}
                style={tw`h-40 w-full rounded-lg my-2`}
                resizeMode="cover"
              />
            )}
            {item.video && (
              <Video
                source={{uri: item.video}}
                style={tw`h-40 w-full rounded-lg my-2`}
                resizeMode="cover"
                controls
              />
            )}
            <Text>{item.text}</Text>
            <Text style={tw`text-xs text-gray-500 mt-2`}>
              {new Date(item.createdAt).toLocaleTimeString()}
            </Text>
          </View>
        )}
        contentContainerStyle={tw`p-4`}
      />

      {/* Input and Send Button */}
      <View style={tw`flex-row items-center p-3 border-t border-gray-300`}>
        {/* Attach Media Button */}
        <TouchableOpacity onPress={capturePhoto} style={tw`mr-3`}>
          <SvgXml xml={StillCamera} width={20} height={20} />
        </TouchableOpacity>

        {/* Camera Button */}
        <TouchableOpacity onPress={recordVideo} style={tw`mr-3`}>
          <SvgXml xml={VideoCam} width={20} height={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => pickMedia('video')} style={tw`mr-3`}>
          <SvgXml xml={AttachmentIcon} width={20} height={20} />
        </TouchableOpacity>
        <View style={tw`flex-row w-[75%] gap-1`}>
          <TextInput
            style={tw`flex-1 h-10 border border-gray-400 rounded-2xl px-3`}
            placeholder="Type a message"
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={tw`bg-gray-400 py-1 px-2 rounded-2xl`}>
            <Text style={tw`text-white text-lg font-MontserratBold`}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Preview Selected Media */}
      {mediaUri && mediaType === 'image' && (
        <View style={tw`flex-row items-center p-3`}>
          <Image
            source={{uri: mediaUri}}
            style={tw`h-20 w-20 rounded-lg`}
            resizeMode="cover"
          />
          <Button title="Remove" onPress={() => setMediaUri(null)} />
        </View>
      )}
      {mediaUri && mediaType === 'video' && (
        <View style={tw`flex-row items-center p-3`}>
          <Video
            source={{uri: mediaUri}}
            style={tw`h-40 w-full rounded-lg`}
            resizeMode="cover"
            controls
          />
          <SvgXml xml={VideoCam} width={20} height={20} />
          <Button title="Remove" onPress={() => setMediaUri(null)} />
        </View>
      )}
    </View>
  );
};

export default ChatScreen;
