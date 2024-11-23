// import React, { useState } from 'react';
// import { Dimensions, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// import LinearGradient from 'react-native-linear-gradient'; // Ensure you have this library installed
// import tw from 'twrnc';
// import { CrossIconBold } from '../assets/icons/icon'; // Assuming you have a CrossIconBold component

// const { width, height } = Dimensions.get('window');

// // Example data for the carousel
// const DATA = [
//   {
//     id: '1',
//     profile: {
//       name: 'Lana',
//       age: 26,
//       distance: '0.5 mi. away from you',
//       image: require('../assets/images/ExploreImg.png'),
//       interests: ['Online shopping', 'Amateur cook', 'Anime', 'Horror films', 'Skincare'],
//     },
//   },
//   {
//     id: '2',
//     profile: {
//       name: 'John',
//       age: 30,
//       distance: '1.0 mi. away from you',
//       image: require('../assets/images/openingImg.png'),
//       interests: ['Photography', 'Travel', 'Music', 'Technology', 'Cooking'],
//     },
//   },
//   {
//     id: '3',
//     profile: {
//       name: 'Sophia',
//       age: 24,
//       distance: '2.3 mi. away from you',
//       image: require('../assets/images/promptImg.png'),
//       interests: ['Art', 'Yoga', 'Nature', 'Reading', 'Fitness'],
//     },
//   },
// ];

// const ExploreScreen = () => {
//   // State to track if the carousel is sliding
//   const [isSliding, setIsSliding] = useState(false);
//   console.log("47",isSliding)

//   return (
//     <View style={tw`flex-1 bg-black relative`}>
//       <Carousel
//         loop // Enables both left-to-right and right-to-left sliding
//         width={width} // Full-screen width
//         height={height} // Full-screen height
//         autoPlay={false} // Auto-slide
//         autoPlayInterval={3000}
//         data={DATA} // Data array with profiles
//         scrollAnimationDuration={1000} // Adjusted scroll speed
//         mode="horizontal-stack" // Horizontal stack mode
//         modeConfig={{
//           stackInterval: 20, // Adjust stack spacing
//           scaleInterval: 0.9, // Scale for inactive cards
//           translationInterval: 50, // Adjust side translation
//         }}
//         onScrollBeginDrag={() => setIsSliding(true)} // Start sliding
//         onScrollEndDrag={() => setIsSliding(false)} // End sliding
//         onSnapToItem={(index) => console.log('Current Index:', index)} // Track current slide
//         renderItem={({ item }) => (
//           <ImageBackground
//             source={item.profile.image} // Replace with your local image path
//             style={tw`flex-1`}
//             imageStyle={tw`w-full h-full`}
//           >
//             {/* Gradient Overlay */}
//             <LinearGradient
//               colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)']}
//               style={tw`absolute inset-0`}
//             />

//             <View style={tw`px-[4%] mt-0 mb-0 flex justify-end h-[90%]`}>
//               {/* User Details */}
//               <View style={tw`mt-48`}>
//                 <View style={tw`flex-row gap-4 items-center`}>
//                   <Text style={tw`text-3xl text-white font-MontserratBold`}>{item.profile.name}</Text>
//                   <Text style={tw`text-xl text-gray-300 font-MontserratRegular`}>{item.profile.age}</Text>
//                 </View>
//                 <Text style={tw`text-sm text-gray-400`}>{item.profile.distance}</Text>
//               </View>

//               {/* Interests */}
//               <View style={tw`flex-row flex-wrap gap-4 my-6`}>
//                 {item.profile.interests.map((interest, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={tw`bg-[#6D6D6D99] py-1 px-4 rounded-full`}
//                   >
//                     <Text style={tw`text-white text-sm`}>{interest}</Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>

//               {/* Action Buttons */}
//               <View style={tw`flex-row items-center mx-auto justify-between w-3/5 my-6`}>
//                 <TouchableOpacity
//                   style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}
//                 >
//                   <Text style={tw`text-3xl text-gray-800`}>❌</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}
//                 >
//                   <Text style={tw`text-3xl text-gray-800`}>⭐</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}
//                 >
//                   <Text style={tw`text-3xl text-gray-800`}>💚</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </ImageBackground>
//         )}
//       />

//       {/* CrossIconBold in the center */}
//       {isSliding && (
//         <View style={tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
//           <CrossIconBold width={50} height={50} color="white" />
//         </View>
//       )}
//     </View>
//   );
// };

// export default ExploreScreen;

import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import {CrossIconBold} from '../assets/icons/icon';

const {width, height} = Dimensions.get('window');

// Example data for the carousel
const DATA = [
  {
    id: '1',
    profile: {
      name: 'Lana',
      age: 26,
      distance: '0.5 mi. away from you',
      image: require('../assets/images/ExploreImg.png'),
      interests: [
        'Online shopping',
        'Amateur cook',
        'Anime',
        'Horror films',
        'Skincare',
      ],
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

const ExploreScreen = () => {
  const [isSliding, setIsSliding] = useState(false);

  // Handles when the user begins dragging
  const handleScrollBeginDrag = () => {
    setIsSliding(true);
  };

  // Handles when the user stops dragging
  const handleScrollEndDrag = () => {
    setIsSliding(false);
  };

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`relative`}>
        <Carousel
          loop
          width={width}
          height={height}
          autoPlay={false}
          autoPlayInterval={3000}
          data={DATA}
          scrollAnimationDuration={3000}
          mode="horizontal-stack"
          modeConfig={{
            stackInterval: 20,
            scaleInterval: 0.9,
            translationInterval: 50,
          }}
          onScrollBeginDrag={handleScrollBeginDrag} // Track start of dragging
          onScrollEndDrag={handleScrollEndDrag} // Track end of dragging
          renderItem={({item}) => (
            <ImageBackground
              source={item.profile.image}
              style={tw`flex-1`}
              imageStyle={tw`w-full h-full`}>
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)']}
                style={tw`absolute inset-0`}
              />

              <View style={tw`px-[4%] mt-0 mb-0 flex justify-end h-[90%]`}>
                <View style={tw`mt-48`}>
                  <View style={tw`flex-row gap-4 items-center`}>
                    <Text style={tw`text-3xl text-white font-MontserratBold`}>
                      {item.profile.name}
                    </Text>
                    <Text
                      style={tw`text-xl text-gray-300 font-MontserratRegular`}>
                      {item.profile.age}
                    </Text>
                  </View>
                  <Text style={tw`text-sm text-gray-400`}>
                    {item.profile.distance}
                  </Text>
                </View>

                <View style={tw`flex-row flex-wrap gap-4 my-6`}>
                  {item.profile.interests.map((interest, index) => (
                    <TouchableOpacity
                      key={index}
                      style={tw`bg-[#6D6D6D99] py-1 px-4 rounded-full`}>
                      <Text style={tw`text-white text-sm`}>{interest}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View
                  style={tw`flex-row items-center mx-auto justify-between w-3/5 my-6`}>
                  <TouchableOpacity
                    style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}>
                    <Text style={tw`text-3xl text-gray-800`}>❌</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}>
                    <Text style={tw`text-3xl text-gray-800`}>⭐</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`w-12 h-12 justify-center items-center bg-gray-300 rounded-full`}>
                    <Text style={tw`text-3xl text-gray-800`}>💚</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          )}
        />

        {isSliding && (
          <View
            style={tw`absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <CrossIconBold width={50} height={50} color="white" />
          </View>
        )}
      </View>
      <View style={tw`flex-1 border text-red-800 z-50 bg-black border-red-500`}>
        <Text style={tw`text-red-700`}>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
      <View style={tw`flex-1`}>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
        <Text>dfdfdfdfdfdf</Text>
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;
