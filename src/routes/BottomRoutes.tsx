import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screen/ExploreScreen';
import DetailsScreen from '../screen/DetailsScreen';
import ChatScreen from '../screen/ChatScreen';
import { Text } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotificationScreen from '../screen/NotificationScreen';
import {
  ExploreFocus,
  Explore,
  Chat,
  ChatFocus,
  Profile,
  ProfileFocus,
  Notification,
  NotificationFocus,
} from '../assets/icons/icon';
import ProfileScreen from '../screen/ProfileScreen';
import { useEffect, useState } from 'react';
import EmpltyChatScreen from '../screen/EmpltyChatScreen';
import ConnectedChatScreen from '../screen/ConnectedChatScreen';

const Tab = createBottomTabNavigator();

const BottomRoutes = () => {
  // State to determine if chat data exists
  const [hasChatData, setHasChatData] = useState(false);

  // Simulate fetching chat data
  useEffect(() => {
    // Fetch or check chat data here
    const fetchChatData = async () => {
      const mockData = []; // Replace with your actual data fetching logic
      setHasChatData(mockData.length > 0);
    };

    fetchChatData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: tw`h-16 bg-primaryBase shadow-none border-0`,
        contentStyle: tw`h-16 bg-primaryBase shadow-none border-0`,
        tabBarItemStyle: tw`my-[10px] tablet:my-5 flex-col`,
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarIcon: ({ focused }) => {
          let icon;

          // Choose icon based on route name and focused state
          switch (route.name) {
            case 'explore':
              icon = focused ? ExploreFocus : Explore;
              break;
            case 'notification':
              icon = focused ? NotificationFocus : Notification;
              break;
            case 'chat':
              icon = focused ? ChatFocus : Chat;
              break;
            case 'profileScreen':
              icon = focused ? ProfileFocus : Profile;
              break;
            default:
              icon = null;
          }

          return icon ? <SvgXml xml={icon} /> : null;
        },
        tabBarLabel: ({ focused }) => {
          const color = focused ? 'gray' : 'gray';
          const font = focused ? 'NunitoSansBold' : 'NunitoSansRegular';

          return (
            <Text
              style={{
                color,
                fontSize: 12,
                textTransform: 'capitalize',
                fontFamily: font,
              }}
            >
              {route.name}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="explore" component={ExploreScreen} />
      <Tab.Screen name="notification" component={NotificationScreen} />
      {/* <Tab.Screen
        name="chat"
        component={hasChatData ? ChatScreen : EmpltyChatScreen} // Conditional rendering
      /> */}
      <Tab.Screen
        name="chat"
        component={ConnectedChatScreen} // Conditional rendering
      />
      <Tab.Screen name="profileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
