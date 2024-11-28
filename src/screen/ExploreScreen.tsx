import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ListRenderItemInfo,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import {
  BackgroundIcon,
  BookIcon,
  ChildrenIcon,
  CrossIconBold,
  Drinks,
  DrugIcon,
  EducationIcon,
  Ehinicity,
  EnginnerIcon,
  EthinicityIcon,
  HeartIcon,
  Height,
  HieghtIcon,
  InterestIcon,
  LifeStyle,
  Location,
  LocationIcon,
  Men,
  Menicon,
  Message,
  PersonalPromptIcon,
  Profile,
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
import AnimatedStarRating from '../components/AnimatedStartRating';
import InputText from '../components/inputs/InputText';
import TButton from '../components/buttons/TButton';

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

  // State to track selected items (using type annotation for the array of strings)
  const [selectedItems, setSelectedItems] = useState<Topic[]>([]);

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

  return (
    <ScrollView style={tw`flex-1`}>
      {/* <View style={tw`relative`}>
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
          onScrollBeginDrag={handleScrollBeginDrag}
          onScrollEndDrag={handleScrollEndDrag}
          renderItem={({ item }) => (
            <ImageBackground
              source={item.profile.image}
              style={tw`flex-1`}
              imageStyle={tw`w-full h-full`}
            >
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
                    <Text style={tw`text-xl text-gray-300 font-MontserratRegular`}>
                      {item.profile.age}
                    </Text>
                  </View>
                  <Text style={tw`text-sm text-gray-400`}>
                    {item.profile.distance}
                  </Text>
                </View>

                <View style={tw`flex-row flex-wrap gap-4 my-6`}>
                  {item.profile.interests.map((interest, index) => (
                    <TouchableOpacity key={index} style={tw`bg-[#6D6D6D99] py-1 px-4 rounded-full`}>
                      <Text style={tw`text-white text-sm`}>{interest}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={tw`flex-row items-center mx-auto justify-between w-3/5 my-6`}>
                  <TouchableOpacity style={tw`w-12 h-12 justify-center items-center  rounded-full`}>
                    <Text style={tw`text-3xl text-gray-800`}>❌</Text>
                  </TouchableOpacity>
                  <View style={tw`bg-none`}>
                    <AnimatedStarRating StarIcon={StarIcon} />
                  </View>

                  <TouchableOpacity style={tw`w-12 h-12 justify-center items-center rounded-full`}>
                    <Text style={tw`text-3xl text-gray-800`}>💚</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          )}
        />
        {isSliding && (
          <View style={tw`absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
            <CrossIconBold width={50} height={50} color="white" />
          </View>
        )}
      </View> */}
      {/* Additional content */}
      <View style={tw`pb-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={UserIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Basic Information</Text>
          </View>
          <Text>Current Location</Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={LocationIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>New York, USA</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Want to date</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={Menicon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Men</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Height</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={HieghtIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Men</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Ethinicity</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={EthinicityIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>East Asian</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%]`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={InterestIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold`}>Interest</Text>
          </View>

          <View style={tw`pb-2 mt-2 bg-white`}>
            <View style={tw`py-2 px-4`}>
              {/* FlatList Container */}
              <View style={tw`flex-row flex-wrap`}>
                <FlatList
                  data={topics}
                  renderItem={renderItem}
                  keyExtractor={item => item}
                  numColumns={3} // Optional for multi-column layout
                  scrollEnabled={false} // Disable scrolling inside FlatList
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
            <Text style={tw`font-MontserratBold font-bold`}>Lifestyle</Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2`}>Drinks</Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={Drinks} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Occatonally</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Smokes</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={SmokeIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Occatonally</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Weed</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={WeedIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Occatonally</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Drugs</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={DrugIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>No</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Children</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={ChildrenIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>
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
            <Text style={tw`font-MontserratBold font-bold`}>Background </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2`}>Home Town</Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={LocationIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>San Francisco, CA</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>
              Religious Beliefs
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={ReligiousIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Christian</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={EducationIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold`}>
              Education & Career{' '}
            </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2`}>School</Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={UnivesityIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Harvard University</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>
              Highest Level of Education
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={BookIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Post-graduate</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Job Title</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={EnginnerIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Software Engineer</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Work Place</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={WorkplaceIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Google</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={PersonalPromptIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold`}>
              Personal Prompts{' '}
            </Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2`}>Prompt 1</Text>
          <View style={tw`flex-row mb-2 gap-2 items-center`}>
            {/* <SvgXml xml={UnivesityIcon} width={20} height={20} /> */}
            <Text style={tw`font-MontserratRegular`}>
              Exploring life, one adventure at a time 🌍✨
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Prompt 2</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            {/* <SvgXml xml={BookIcon} width={20} height={20} /> */}
            <Text style={tw`font-MontserratRegular`}>
              Here for genuine connections and good vibes 🌞
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Prompt 3</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            {/* <SvgXml xml={EnginnerIcon} width={20} height={20} /> */}
            <Text style={tw`font-MontserratRegular`}>
              Looking for someone to join me on spontaneous road trips 🚗💨
            </Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Work Place</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml xml={WorkplaceIcon} width={20} height={20} />
            <Text style={tw`font-MontserratRegular`}>Google</Text>
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
      </View>
      <View style={tw`flex-row items-center justify-center gap-1  my-4`}>
        <Text style={tw`font-MontserratBold`}>Show Less</Text>
        <SvgXml xml={Uparrow} width={20} height={20} />
      </View>

      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={Message} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold`}>
              Send Message to Lana{' '}
            </Text>
          </View>
          <Text style={tw`font-MontserratBold pt-2`}>
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
      <View style={tw`flex-row justify-between w-[60%] mx-auto my-4`}>
        <View style={tw`border-red-400 border-2 rounded-full p-2`}>
          <SvgXml xml={RedCrossIcon} width={50} height={50} color={'red'} />
        </View>
      <View style={tw`border-yellow-400 border-2 rounded-full p-2`}>
     <View>
     <SvgXml xml={StarIcon} width={50} height={50} color={'red'} />
     </View>
      </View>
     <View style={tw`border-green-400 border-2 rounded-full p-2`}>
     <SvgXml xml={HeartIcon} width={50} height={50} color={'red'} />
     </View>
      </View>
      <View style={tw`w-full flex mx-auto gap-y-2 justify-center items-center my-4`}>
        <TButton titleStyle={tw`text-black font-MontserratBold`} containerStyle={tw`w-[90%] bg-gray-100`} title="Share Lana's profile" />
        <TButton titleStyle={tw`text-black font-MontserratBold`} containerStyle={tw`w-[90%] bg-gray-100`} title="Block"  />
        <TButton titleStyle={tw`text-black font-MontserratBold`} containerStyle={tw`w-[90%] bg-gray-100`} title="Report Lana" />
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;
