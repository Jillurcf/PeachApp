import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Provider } from 'react-redux';
import { useDeviceContext } from 'twrnc';
import tw from '../lib/tailwind';
// import store from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LikeSendingScreen from '../screen/LikeSendingScreen';
import BottomRoutes from './BottomRoutes';
import EditProfile from '../screen/EditProfile';
// import { Toast } from 'react-native-toast-notifications';
import Toast from 'react-native-toast-message';
import AccountsSettings from '../screen/AccountsSettings';
import UpdatePassword from '../screen/UpdatePassword';
import ChatScreen from '../screen/ChatScreen';
import AccountCreationOpening from '../screen/AccountCreationOpening';
import AccountCreationEmail from '../screen/AccountCreationEmail';
import AccountCreationOtpVerificaton from '../screen/AccountCreationOtpVerification';
import WelcomeScreen from '../screen/WelComeScreen';
import WelcomeName from '../screen/WelcomeName';
import WelcomeDob from '../screen/WelcomeDob';
import WelcomeNotificationControl from '../screen/WelcomeNotificationControl';
import BasicInfo from '../screen/BasicInfo';
import Location from '../screen/Location';
import Gender from '../screen/Gender';
import Choice from '../screen/Choice';
import Height from '../screen/Height';
import Passion from '../screen/Passion';
import Ethinicity from '../screen/Ethinicity';
import Children from '../screen/Children';
import HomeTown from '../screen/HomeTown';
import WorkPlace from '../screen/WorkPlace';
import JobTitle from '../screen/JobTitile';
import School from '../screen/School';
import Study from '../screen/Study';
import Religion from '../screen/Religion';
import DrinkingStatus from '../screen/DrinkingStatus';
import SmokingStatus from '../screen/SmokingStatus';
import WeedStatus from '../screen/WeedStatus';
import DrugStatus from '../screen/DrugStatus';
import Privacy from '../screen/Privacy';
import CreateYourProfile from '../screen/CreateYourProfile';
import UploadPhotos from '../screen/UploadPhotos';
import PromptScreen from '../screen/PromptScreen';



const Stack = createNativeStackNavigator();

function AppRoutes() {
//   const [isSplash, setIsSplash] = React.useState(true);
// React.useEffect(() => {
//   // Set the reference to Toast when it's mounted
//   Toast.setRef(Toast);
// }, []);

  useDeviceContext(tw);

  return (
    
    <GestureHandlerRootView >
      {/* <Toast.Provider> */}
      <NavigationContainer
      >
        <Stack.Navigator
        screenOptions={{
          // statusBarTranslucent:false,
         animation: 'slide_from_right'
          
        }} >
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
            component={WelcomeScreen}
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
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="basicInfo"
            component={BasicInfo}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="location"
            component={Location}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="gender"
            component={Gender }
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="choice"
            component={Choice}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="height"
            component={Height}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="passion"
            component={Passion}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="ethinicity"
            component={Ethinicity  }
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="children"
            component={Children}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="homeTown"
            component={HomeTown}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="workPlace"
            component={WorkPlace}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="jobTitle"
            component={JobTitle}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="schoolName"
            component={School}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="study"
            component={Study}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="religion"
            component={Religion}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="drinkingStatus"
            component={DrinkingStatus}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="smokeStatus"
            component={SmokingStatus}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="weedStatus"
            component={WeedStatus}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="drugStatus"
            component={DrugStatus}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="privacy"
            component={Privacy}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="createYourProfile"
            component={CreateYourProfile}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="uploadPhotos"
            component={UploadPhotos}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="promptScreen"
            component={PromptScreen}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="likeSendingScreen"
            component={LikeSendingScreen}
          />
          <Stack.Screen
          options={{
            headerShown: false,
            statusBarTranslucent:false
          }}
            name="bottomRoute"
            component={BottomRoutes}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="editProfile"
            component={EditProfile}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="accountSettings"
            component={AccountsSettings}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="updatePassword"
            component={UpdatePassword}
          />
          <Stack.Screen
          options={{
            headerShown: false,
          }}
            name="chatScreen"
            component={ChatScreen}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    
      <Toast />
    
     
    </GestureHandlerRootView>
  
  
  );
}

export default AppRoutes;
