// import React from 'react';
// import { Dimensions, Image, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import tw from 'twrnc';

// const { width, height } = Dimensions.get('window');

// // Example data with local image paths
// const DATA = [
//   { id: '1', image: require('../assets/images/openingImg.png') },
//   { id: '2', image: require('../assets/images/openingImg.png') },
//   { id: '3', image: require('../assets/images/openingImg.png') },
// ];

// const NotificationScreen = () => {
//   return (
//     <View style={tw`flex-1 bg-black`}>
//       <Carousel
//         loop
//         width={width} // Full-screen width
//         height={height} // Full-screen height
//         autoPlay={false} // Auto-slide
//         autoPlayInterval={3000} 
//         data={DATA} // Data array with image paths
//         scrollAnimationDuration={3000} // Smooth animation
//         mode="horizontal-stack" // Horizontal stack mode
//         modeConfig={{
//           stackInterval: 20, // Adjust stack spacing
//           scaleInterval: 0.9, // Scale for inactive cards
//           translationInterval: 20, // Adjust side translation
//         }}
//         onSnapToItem={(index) => console.log('Current Index:', index)} // Track current slide
//         renderItem={({ item }) => (
//           <View style={tw`flex-1 justify-center items-center`}>
//             <Image
//               source={item.image} // Local image source
//               style={tw`w-full h-full`} // Full-screen image
//               resizeMode="cover" // Cover image for full size
//             />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default NotificationScreen;

import React from 'react';
import { Dimensions, ImageBackground, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient'; // Ensure you have this library installed
import tw from 'twrnc';

const { width, height } = Dimensions.get('window');

// Example data for the carousel
const DATA = [
  {
    id: '1',
    profile: {
      name: 'Lana',
      age: 26,
      distance: '0.5 mi. away from you',
      image: require('../assets/images/ExploreImg.png'),
      interests: ['Online shopping', 'Amateur cook', 'Anime', 'Horror films', 'Skincare'],
    },
  },
  {
    id: '2',
    profile: {
      name: 'John',
      age: 30,
      distance: '1.0 mi. away from you',
      image: require('../assets/images/openingImg.png'),
      interests: ['Photography', 'Travel', 'Music', 'Technology', 'Cooking'],
    },
  },
  {
    id: '3',
    profile: {
      name: 'Sophia',
      age: 24,
      distance: '2.3 mi. away from you',
      image: require('../assets/images/promptImg.png'),
      interests: ['Art', 'Yoga', 'Nature', 'Reading', 'Fitness'],
    },
  },
];

const NotificationScreen = () => {
  return (
    <View style={tw`flex-1 bg-black`}>
      <Carousel
        loop
        width={width} // Full-screen width
        height={height} // Full-screen height
        autoPlay={false} // Auto-slide
        autoPlayInterval={3000}
        data={DATA} // Data array with profiles
        scrollAnimationDuration={3000} // Smooth animation
        mode="horizontal-stack" // Horizontal stack mode
        modeConfig={{
          stackInterval: 20, // Adjust stack spacing
          scaleInterval: 0.9, // Scale for inactive cards
          translationInterval: 20, // Adjust side translation
        }}
        onSnapToItem={(index) => console.log('Current Index:', index)} // Track current slide
        renderItem={({ item }) => (
          <ImageBackground
            source={item.profile.image} // Replace with your local image path
            style={tw`flex-1`}
            imageStyle={tw`w-full h-full`}
          >
            {/* Gradient Overlay */}
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} // Transition from transparent to black
              style={tw`absolute inset-0`}
            />

            <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center p-5`}>
              {/* <View style={tw`items-center`}>
           
                <ImageBackground
                  source={ item.profile.image}
                  style={tw`w-64 h-80 rounded-xl`}
                  resizeMode="cover"
                />
              </View> */}

              {/* User Details */}
              <View style={tw`items-center mt-48`}>
                <Text style={tw`text-3xl font-bold text-white`}>{item.profile.name}</Text>
                <Text style={tw`text-xl text-gray-300`}>{item.profile.age}</Text>
                <Text style={tw`text-sm text-gray-400`}>{item.profile.distance}</Text>
              </View>

              {/* Interests */}
              <View style={tw`flex-row flex-wrap justify-center my-6`}>
                {item.profile.interests.map((interest, index) => (
                  <TouchableOpacity
                    key={index}
                    style={tw`bg-gray-300 py-1 px-3 rounded-full m-2`}
                  >
                    <Text style={tw`text-gray-800 text-sm`}>{interest}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* Action Buttons */}
              <View style={tw`flex-row justify-between w-3/5 my-6`}>
                <TouchableOpacity
                  style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}
                >
                  <Text style={tw`text-3xl text-gray-800`}>❌</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}
                >
                  <Text style={tw`text-3xl text-gray-800`}>⭐</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}
                >
                  <Text style={tw`text-3xl text-gray-800`}>💚</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default NotificationScreen;
