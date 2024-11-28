import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import {SvgXml} from 'react-native-svg';
import {StarIcon} from '../assets/icons/icon';
import tw from '../lib/tailwind';
// import { FontAwesome } from '@expo/vector-icons'; // For star icons

const {width, height} = Dimensions.get('window');

const ProfileScreen = () => {
  const [ratings, setRatings] = useState<number[]>([]); // Array to track active animations
  const iconPositions = useSharedValue<{x: number; y: number}[]>([]);

  const addFlourish = (x: number, y: number) => {
    const newId = ratings.length;
    setRatings(prev => [...prev, newId]);

    // Add position to shared value for animation
    iconPositions.value = [...iconPositions.value, {x, y}];
  };

  const removeFlourish = (id: number) => {
    setRatings(prev => prev.filter(ratingId => ratingId !== id));
  };

  return (
    <View style={styles.container}>
      {/* Rating Icons */}
      <View style={styles.ratingRow}>
        {[1].map((star, index) => (
          <TouchableOpacity
            key={index}
            onPress={event => {
              const {pageX, pageY} = event.nativeEvent;
              addFlourish(pageX, pageY);
            }}>
            <SvgXml xml={StarIcon} width={20} height={20} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Flourishing Stars */}
      {ratings.map((id, index) => (
        <FlourishIcon
          key={id}
          x={iconPositions.value[index]?.x || width / 2}
          y={iconPositions.value[index]?.y || height / 2}
          index={index} // Pass index for sequential animation
          onComplete={() => removeFlourish(id)}
        />
      ))}
    </View>
  );
};

const FlourishIcon = ({
  x,
  y,
  index,
  onComplete,
}: {
  x: number;
  y: number;
  index: number;
  onComplete: () => void;
}) => {
  const position = useSharedValue({x, y});
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  // Update animation styles
  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: position.value.x - 20, // Adjust for icon size
    top: position.value.y - 20,
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  React.useEffect(() => {
    // Sequential animation for each star
    position.value = {
      x: position.value.x + Math.random() * 20 - 10, // Small random horizontal movement
      y: position.value.y - 200, // Move upwards (decrease y)
    };
    scale.value = withSpring(1.5); // Slightly increase the size
    opacity.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.quad),
    }); // Fade out

    // Apply delay using setTimeout
    const delay = index * 100; // 100ms delay between each star

    const timer = setTimeout(() => {
      position.value.y = withSpring(position.value.y - 200); // Apply upward movement after delay
      scale.value = withSpring(1.5); // Apply scaling after delay
      opacity.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.quad),
      }); // Fade out after delay
    }, delay);

    // Remove the icon after animation
    const removeTimer = setTimeout(() => {
      onComplete();
    }, 1000 + delay); // Add delay to ensure icon stays for the full duration

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [index]);

  return (
    <Animated.View style={animatedStyle}>
      <View style={tw`flex-row items-center justify-center`}>
        <SvgXml xml={StarIcon} width={20} height={20} />
        {/* <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} /> */}
      </View>
      <View style={tw`flex-row items-center gap-24 justify-center my-12`}>
        <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} />
        {/* <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} /> */}
      </View>
      <View style={tw`flex-row items-center gap-36 justify-center p-4`}>
        <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} />
        {/* <SvgXml xml={StarIcon} width={20} height={20} />
        <SvgXml xml={StarIcon} width={20} height={20} /> */}
      </View>
     
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});

export default ProfileScreen;
