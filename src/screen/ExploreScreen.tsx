import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import tw, {style} from 'twrnc';
import {
  BackgroundIcon,
  BookIcon,
  ChildrenIcon,
  CrossIconBold,
  Drinks,
  DrugIcon,
  EducationIcon,
  EnginnerIcon,
  EthinicityIcon,
  HeartIcon,
  HieghtIcon,
  InterestIcon,
  LifeStyle,
  LocationIcon,
  LoveIcon,
  Menicon,
  Message,
  PersonalPromptIcon,
  RedCrossIcon,
  ReligiousIcon,
  SmokeIcon,
  StarIcon,
  UnivesityIcon,
  Uparrow,
  UserIcon,
  WeedIcon,
  WorkplaceIcon,
} from '../assets/icons/icon';
import {SvgXml} from 'react-native-svg';
import InputText from '../components/inputs/InputText';
import TButton from '../components/buttons/TButton';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedStarRating from '../components/AnimatedStartRating';
import AnimatedLoveSending from '../components/AnimatedLoveSending';
// import ProgressBars from '../components/ExploreProgressBar';

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

const SlidingProgressBars = ({totalSlides, currentSlide}) => {
  // Render progress bars based on the total slides and the current slide index
  return (
    <View
      style={tw`flex-row absolute bottom-5 z-50 left-1/2 transform -translate-x-1/2`}>
      {Array.from({length: totalSlides}).map((_, index) => {
        const progress = index <= currentSlide ? 1 : 0; // Progress bar fills based on current slide
        return (
          <Progress.Bar
            key={index}
            progress={progress}
            width={20}
            color={progress === 1 ? 'black' : 'gray'}
            unfilledColor="lightgray"
            borderWidth={0}
            style={tw`mx-1`}
          />
        );
      })}
    </View>
  );
};
type Topic =
  | 'Online Shopping'
  | 'Amateur Cook'
  | 'Anime'
  | 'Horror Films'
  | 'Skincare';

const ExploreScreen = () => {
  const topics: Topic[] = [
    'Online Shopping',
    'Amateur Cook',
    'Anime',
    'Horror Films',
    'Skincare',
  ];

  // Clipboard.setString('This is the text to copy!');

  // Get string from clipboard

  // State to track selected items (using type annotation for the array of strings)
  const [selectedItems, setSelectedItems] = useState<Topic[]>([]);
  // const [isSliding, setIsSliding] = useState(false);
  // State for modal visibility
  // const [modalVisible, setModalVisible] = useState(false);
  // const [copySuccess, setCopySuccess] = useState(false);

  Clipboard.getString().then(content => {
    console.log(content); // This will log the clipboard content
  });
  // Function to handle item selection
  const toggleSelection = (item: Topic): void => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(item)) {
        return prevSelected.filter(selectedItem => selectedItem !== item);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  // Render each item in the FlatList
  const renderItem = ({item}: {item: Topic}) => {
    const isSelected = selectedItems.includes(item);
    return (
      <TouchableOpacity
        onPress={() => toggleSelection(item)}
        style={tw`bg-gray-200 px-4 py-2 rounded-full mr-2 mb-2`}>
        <Text
          style={tw`text-sm ${
            isSelected ? 'font-bold text-blue-500' : 'text-black'
          }`}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  const handleScrollBeginDrag = () => {
    setIsSliding(true);
  };

  const handleScrollEndDrag = () => {
    setIsSliding(false);
  };
  // for dynamic handling
  // const handleShareProfile = () => {
  //   const profileUrl = `https://example.com/profile/${selectedProfile.profile.name.toLowerCase()}`;

  //   // Copy the URL to clipboard
  //   Clipboard.setString(profileUrl);

  //   // Optional: Display a message to confirm that the URL is copied
  //   Alert.alert('Profile URL Copied', 'You can now paste this URL anywhere!');
  // };

  // for static handling
  const navigation = useNavigation();
  const [selectedProfile, setSelectedProfile] = useState({
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
  });

  // Function to handle "Share Profile" action
  const handleShareProfile = () => {
    const profileUrl = `https://example.com/profile/${selectedProfile.profile.name.toLowerCase()}`;

    // You can log it to test the generated URL
    console.log(profileUrl);

    // Optionally, copy it to the clipboard
    Clipboard.setString(profileUrl);
    // Alert.alert('Profile URL Copied', 'You can now paste this URL anywhere!');
  };

  // Function to navigate to the profile page (simulating the dynamic URL)
  const handleViewProfile = () => {
    const profileUrl = `https://example.com/profile/${selectedProfile.profile.name.toLowerCase()}`;

    // Simulate navigation to the profile screen with the profile name
    navigation.navigate('ProfileScreen', {
      profileName: selectedProfile.profile.name,
    });
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  return (
    <ScrollView style={tw`flex-1`}>
      <View style={tw`relative`}>
        <Carousel
          loop
          width={width}
          height={height}
          autoPlay={true}
          autoPlayInterval={3000}
          data={DATA}
          scrollAnimationDuration={3000}
          mode="horizontal-stack"
          modeConfig={{
            stackInterval: 20,
            scaleInterval: 0.9,
            translationInterval: 50,
          }}
          onScrollBeginDrag={handleScrollBeginDrag}
          onScrollEndDrag={handleScrollEndDrag}
          renderItem={({item}) => (
            <ImageBackground
              source={item.profile.image}
              style={tw`flex-1`}
              imageStyle={tw`w-full h-full`}>
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(0,0,0,1)']}
                style={tw`absolute inset-0`}
              />

              <SlidingProgressBars
              
                totalSlides={DATA.length}
                currentSlide={currentSlide}
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

                <View style={tw`flex-row flex-wrap gap-4 my-2`}>
                  {item.profile.interests.map((interest, index) => (
                    <TouchableOpacity
                      key={index}
                      style={tw`bg-[#6D6D6D99] py-1 px-4 rounded-full`}>
                      <Text style={tw`text-white text-sm`}>{interest}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View
                  style={tw`flex-row items-center mx-auto justify-between w-3/5 my-14`}>
                  <TouchableOpacity
                    style={tw`w-12 h-12 justify-center items-center  rounded-full`}>
                    <Text style={tw`text-3xl text-gray-800`}>❌</Text>
                  </TouchableOpacity>
                  <View style={tw`bg-none`}>
                    <AnimatedStarRating StarIcon={StarIcon} />
                  </View>

                  <TouchableOpacity
                    style={tw`w-12 h-12 justify-center items-center rounded-full`}>
                    <AnimatedLoveSending LoveIcon={LoveIcon} />
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
      {/* Additional content */}
      <View style={tw`pb-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={UserIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Basic Information
            </Text>
          </View>
          <Text style={tw`text-black font-MontserratRegular`}>
            Current Location
          </Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={LocationIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              New York, USA
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Want to date
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={Menicon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>Men</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Height
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={HieghtIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>Men</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Ethinicity
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={EthinicityIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              East Asian
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%]`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={InterestIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Interest
            </Text>
          </View>

          <View style={tw`pb-2 mt-2 bg-white`}>
            <View style={tw`py-2 px-4`}>
              {/* FlatList Container */}
              <View style={tw`flex-row flex-wrap`}>
                <FlatList
                  horizontal={true}
                  data={topics}
                  renderItem={renderItem}
                  keyExtractor={item => item}
                  // numColumns={3} // Optional for multi-column layout
                  scrollEnabled={true} // Disable scrolling inside FlatList
                  contentContainerStyle={tw`flex-row flex-wrap`}
                />
              </View>
            </View>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>

      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={LifeStyle} width={12} height={12} />
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Lifestyle
            </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2 text-black`}>
            Drinks
          </Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={Drinks} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Occatonally
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Smokes
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={SmokeIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Occatonally
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Weed
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={WeedIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Occatonally
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Drugs
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={DrugIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>No</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Children
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={ChildrenIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              I do not hanve children
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={BackgroundIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Background{' '}
            </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2 text-black`}>
            Home Town
          </Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={LocationIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              San Francisco, CA
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Religious Beliefs
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={ReligiousIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>Christian</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={EducationIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Education & Career{' '}
            </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2 text-black`}>
            School
          </Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={UnivesityIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Harvard University
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Highest Level of Education
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={BookIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Post-graduate
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Job Title
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={EnginnerIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>
              Software Engineer
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Work Place
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={WorkplaceIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>Google</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={PersonalPromptIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Personal Prompts
            </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2 text-black`}>
            Prompt 1
          </Text>
          <View style={tw`flex-row mb-2 gap-2 items-center`}>
            {/* <SvgXml xml={UnivesityIcon} width={20} height={20} /> */}
            <Text style={tw`font-MontserratRegular text-black`}>
              Exploring life, one adventure at a time 🌍✨
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Prompt 2
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            {/* <SvgXml xml={BookIcon} width={20} height={20} /> */}
            <Text style={tw`font-MontserratRegular text-black`}>
              Here for genuine connections and good vibes 🌞
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Prompt 3
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            {/* <SvgXml xml={EnginnerIcon} width={20} height={20} /> */}
            <Text style={tw`font-MontserratRegular text-black`}>
              Looking for someone to join me on spontaneous road trips 🚗💨
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Work Place
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={WorkplaceIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular text-black`}>Google</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`flex-row items-center justify-center gap-1  my-4`}>
        <Text style={tw`font-MontserratBold text-black`}>Show Less</Text>
        <SvgXml xml={Uparrow} width={20} height={20} />
      </View>

      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={Message} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold text-black`}>
              Send Message to Lana{' '}
            </Text>
          </View>
          <Text style={tw`font-MontserratBold pt-2 text-black`}>
            Boost your profile for a 25% better chance of finding your perfect
            match!
          </Text>
        </View>
        <View style={tw`w-full h-14 flex justify-center items-center py-2`}>
          <InputText
            placeholder="Type a Message"
            floatingPlaceholderStyle={tw`font-MontserratRegular`}
            containerStyle={tw`w-[90%]`}
          />
        </View>
      </View>

      <View
        style={tw`flex-row items-center mx-auto justify-between w-3/5 py-4`}>
        <TouchableOpacity
          style={tw`w-12 h-12 justify-center items-center  rounded-full`}>
          <Text style={tw`text-3xl text-gray-800`}>❌</Text>
        </TouchableOpacity>
        <View style={tw`bg-none`}>
          <AnimatedStarRating StarIcon={StarIcon} />
        </View>

        <TouchableOpacity
          style={tw`w-12 h-12 justify-center items-center rounded-full`}>
          <AnimatedLoveSending LoveIcon={LoveIcon} />
        </TouchableOpacity>
      </View>
      <View
        style={tw`w-full flex mx-auto gap-y-2 justify-center items-center my-4`}>
        <TButton
          onPress={handleShareProfile}
          titleStyle={tw`text-black font-MontserratBold`}
          containerStyle={tw`w-[90%] bg-gray-100`}
          title="Share Lana's profile"
        />
        <TButton
          titleStyle={tw`text-black font-MontserratBold`}
          containerStyle={tw`w-[90%] bg-gray-100`}
          title="Block"
        />
        <TButton
          titleStyle={tw`text-black font-MontserratBold`}
          containerStyle={tw`w-[90%] bg-gray-100`}
          title="Report Lana"
        />
      </View>
      <StatusBar translucent={false} />
    </ScrollView>
  );
};

export default ExploreScreen;
