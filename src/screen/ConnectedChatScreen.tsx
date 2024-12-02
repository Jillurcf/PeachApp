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
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-ui-lib';

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
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'John Doe commented on your post.',
        creator_name: 'John Doe',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 2,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Your profile picture was liked.',
        creator_name: 'User',
      },
      created_at: new Date().toISOString(),
      read_at: new Date().toISOString(),
    },
    {
      id: 3,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 4,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 5,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 6,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 7,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 8,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 9,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
    {
      id: 10,
      data: {
        creator_image: require('../assets/images/NotificationImg.png'),
        message: 'Anna followed you.',
        creator_name: 'Anna',
      },
      created_at: new Date().toISOString(),
      read_at: null,
    },
  ]);
  const handleRead = () => {
    console.log("red")
    navigation?.navigate('chatScreen')
  }
  return (
    <ScrollView style={tw`flex-1 my-12 h-screen px-[4%]`}>
      <View style={tw`flex-row justify-between w-full`}>
        <Text style={tw`font-MontserratBold text-black text-xl`}>Chats</Text>
        <SvgXml xml={Notification} width={25} height={25} />
      </View>
      <View style={tw`my-6 `}>
        <Text style={tw`font-MontserratBold text-black text-lg py-2`}>
          New Match
        </Text>
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
      <View>
        <Text style={tw`text-black font-MontserratBold`}>Message</Text>
        {/* Notifications List */}
        <FlatList
          data={notifications}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={tw`flex-row items-center gap-2 py-2 `}>
              <View style={tw`relative`}>
                {/* Avatar */}
                {item.data.creator_image && (
                  <Avatar
                    source={item.data.creator_image}
                    size={50}
                    containerStyle={tw`mr-4`}
                  />
                )}
                <View
                  style={tw`w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-4`}
                />
              </View>
              {/* Notification Content */}
              <View style={tw`flex-1 border-b border-gray-200 pb-2`}>
                <Text style={tw`text-black`}>{item.data.message}</Text>

                {/* Read/Unread Status */}
                {item.read_at === null ? (
                  <TouchableOpacity
                    onPress={() => handleRead(item?.id)}
                    style={tw`flex-row items-center mt-2`}>
                    <Text style={tw`text-blue-500 px-2`}>
                      {new Date(item.created_at).toLocaleString()}
                    </Text>
                    <View style={tw`w-5 h-5 items-center justify-center bg-red-500 rounded-full`}>
                      <Text>3</Text></View> 
                  </TouchableOpacity>
                ) : (
                  <Text style={tw`text-gray-500 mt-2`}>
                    {new Date(item.created_at).toLocaleString()}
                  </Text>
                )}
              </View>
            </View>
          )}
        />
      </View>

      <StatusBar backgroundColor={'gray'} translucent={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ConnectedChatScreen;
