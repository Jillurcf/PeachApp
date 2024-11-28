import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  FlatList,
} from 'react-native';

import tw from '../lib/tailwind';
import {NavigProps} from '../interfaces/NaviProps';
import {Notification, warningRed} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import TButton from '../components/buttons/TButton';

type ItemData = {
  id: string;
  image: string;
};
const DATA: ItemData[] = [
  {
    id: '1',
    image: require('../assets/images/NewChatOne.png'),
  },
  {
    id: '2',
    image: require('../assets/images/NewChatTwo.png'),
  },
  {
    id: '3',
    image: require('../assets/images/NewChatThree.png'),
  },
  {
    id: '4',
    image: require('../assets/images/NewChatFour.png'),
  },
  {
    id: '5',
    image: require('../assets/images/NewChatOne.png'),
  },
  {
    id: '6',
    image: require('../assets/images/NewChatTwo.png'),
  },
  {
    id: '7',
    image: require('../assets/images/NewChatThree.png'),
  },
  {
    id: '8',
    image: require('../assets/images/NewChatFour.png'),
  },
];
const ConnectedChatScreen = ({navigation}: NavigProps<null>) => {
  return (
    <View style={tw`flex-1 my-12 h-screen px-[4%]`}>
      <View style={tw`flex-row justify-between w-full`}>
        <Text style={tw`font-MontserratBold text-xl`}>Chats</Text>
        <SvgXml xml={Notification} width={25} height={25} />
      </View>
      <View style={tw`my-6 `}>
        <Text style={tw`font-MontserratBold text-lg py-2`}>New Match</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({item}) => {
            return (
              <View style={tw`px-1`}>
                <Image source={item?.image} />
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      
      <StatusBar backgroundColor={'gray'} translucent />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ConnectedChatScreen;
