import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Provider } from 'react-redux';
import { useDeviceContext } from 'twrnc';
import tw from '../lib/tailwind';
// import store from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountCreationOpening from '../screen/AccountCreationOpening';
import AccountCreationEmail from '../screen/AccountCreationEmail';
import AccountCreationOtpVerificaton from '../screen/AccountCreationOtpVerification';
import WelComeScreen from '../screen/WelComeScreen';
import WelcomeName from '../screen/WelcomeName';
import WelcomeDob from '../screen/WelcomeDob';
import WelcomeNotificationControl from '../screen/WelcomeNotificationControl';



const Stack = createNativeStackNavigator();

function AppRoutes() {
//   const [isSplash, setIsSplash] = React.useState(true);
  useDeviceContext(tw);

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AccountCreationOpening">
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="AccountCreationOpening"
            component={AccountCreationOpening}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="AccountCreationEmail"
            component={AccountCreationEmail}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="AccountCreationOtpVerificaton"
            component={AccountCreationOtpVerificaton}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="WelcomeScreen"
            component={WelComeScreen}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="WelcomeName"
            component={WelcomeName}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="WelcomeDob"
            component={WelcomeDob}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="WelcomeNotification"
            component={WelcomeNotificationControl}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  
  
  );
}

export default AppRoutes;
