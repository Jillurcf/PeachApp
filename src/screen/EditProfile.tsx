import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SvgXml} from 'react-native-svg';
import tw from '../lib/tailwind';
import {
  BackgroundIcon,
  BookIcon,
  ChildrenIcon,
  CrossIcon,
  Drinks,
  DrugIcon,
  EducationIcon,
  EnginnerIcon,
  EthinicityIcon,
  HeartIcon,
  HieghtIcon,
  InterestIcon,
  LeftArrow,
  LifeStyle,
  LocationIcon,
  Menicon,
  Message,
  PersonalPromptIcon,
  RedCrossIcon,
  ReligiousIcon,
  SmokeIcon,
  StarIcon,
  TickIcon,
  UnivesityIcon,
  Uparrow,
  UserIcon,
  WeedIcon,
  WorkplaceIcon,
} from '../assets/icons/icon';
import InputText from '../components/inputs/InputText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TButton from '../components/buttons/TButton';
import NormalModal from '../components/modals/NormalModal';
import Toast from 'react-native-toast-message';

type Topic =
  | 'Online Shopping'
  | 'Amateur Cook'
  | 'Anime'
  | 'Horror Films'
  | 'Skincare';
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

const EditProfile = ({navigation}) => {
  const topic: Topic[] = [
    'Online Shopping',
    'Amateur Cook',
    'Anime',
    'Horror Films',
    'Skincare',
  ];
  const [selectedItems, setSelectedItems] = useState<Topic[]>([]);
  const [newInterest, setNewInterest] = useState('');
  const [topics, setTopics] = useState(['Music', 'Art', 'Tech']);
  // State for modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  // const [copySuccess, setCopySuccess] = useState(false);

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

  // Add new interest to the list
  const addInterest = () => {
    if (newInterest.trim()) {
      setTopics([...topics, newInterest]);
      setNewInterest(''); // Clear the input field after adding
    }
  };

  // Remove interest from the list
  const removeInterest = interestToRemove => {
    setTopics(topics.filter(interest => interest !== interestToRemove));
  };
  const renderItem = ({item}) => (
    <View style={tw`relative flex-row items-center mb-2 mr-2`}>
      <TouchableOpacity
        onPress={() => removeInterest(item)}
        style={tw`absolute top-0 right-0 p-1 bg-red-500 rounded-full`}>
        <SvgXml xml={CrossIcon} width={12} height={12} />
      </TouchableOpacity>

      <View
        style={tw`bg-gray-200 text-gray-700 py-2 px-4 rounded-lg border border-gray-300 text-sm`}>
        <Text>{item}</Text>
      </View>
    </View>
  );
  // const handleScrollBeginDrag = () => {
  //   setIsSliding(true);
  // };
const handleSuccess = () => {
    setModalVisible(true)
}

const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'You’re All Set!',
      text2: 'Your profile is now 100% completed.',
    });
  };
  return (
    <ScrollView style={tw`flex-1 `}>
      <TouchableOpacity onPress={() =>navigation.goBack()} style={tw`flex-row gap-4 my-6 p-[4%]`}>
        <SvgXml xml={LeftArrow} width={30} height={30} />
        <Text style={tw`font-MontserratBold text-2xl`}>Edit your info.</Text>
      </TouchableOpacity>
    
      <View style={tw`pb-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml xml={UserIcon} width={20} height={20} />
            <View style={tw`flex-row justify-between w-[90%]`}>
              <Text style={tw`font-MontserratRegular`}>Basic Information</Text>
              <Text style={tw`text-red-700 font-MontserratBold`}>20%</Text>
            </View>
          </View>
          <Text>Current Location</Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={LocationIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="New york, USA"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Want to date</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={Menicon}
              width={20}
              height={20}
            />
            <InputText
              containerStyle={tw`px-8 border-b border-0`}
              placeholder="Men"
            />
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Height</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={HieghtIcon}
              width={20}
              height={20}
            />
            <InputText
              containerStyle={tw`px-8 border-b border-0`}
              placeholder="172 cm"
            />
          </View>
          <View style={tw`border-b border-b-gray-200`}></View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Ethinicity</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={EthinicityIcon}
              width={20}
              height={20}
            />
            <InputText
              containerStyle={tw`px-8 border-b border-0`}
              placeholder="East Asian"
            />
          </View>
        </View>
      </View>
      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw`py-2 px-[4%]`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={InterestIcon} width={20} height={20} />
            <Text style={tw`font-MontserratBold font-bold`}>Interest</Text>
          </View>
          {/* Interest section */}
          <View style={tw`pb-2 mt-2 bg-white`}>
            <View style={tw`py-2 px-[4%]`}>
              <View style={tw`pb-2 mt-2 bg-white`}>
                <View style={tw`py-2`}>
                  {/* Add New Interest Input */}
                  <View style={tw`flex-row items-center mb-4`}>
                    <TextInput
                      style={tw`border border-gray-300 p-2 rounded-lg flex-1 bg-white`}
                      value={newInterest}
                      onChangeText={setNewInterest}
                      placeholder="Add new interest"
                    />
                    <TouchableOpacity
                      onPress={addInterest}
                      style={tw`ml-2 p-2 bg-blue-500 rounded-full`}>
                      <Text style={tw`text-white font-bold`}>Add</Text>
                    </TouchableOpacity>
                  </View>

                  {/* FlatList for Interests */}
                  <View style={tw`flex-row`}>
                    <FlatList
                    horizontal
                      data={topics}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    
                      scrollEnabled={false} // Disable scrolling for tags
                      contentContainerStyle={tw`flex-row `}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={tw`border-b border-b-gray-200`} />
      </View>

      <View style={tw`pb-2 mt-2 bg-white`}>
        <View style={tw` py-2 px-[4%] mt-4`}>
          <View style={tw`flex-row gap-2 items-center`}>
            <SvgXml xml={LifeStyle} width={12} height={12} />
            <Text style={tw`font-MontserratBold font-bold`}>Lifestyle</Text>
          </View>
          <Text style={tw`font-MontserratBold font-bold pt-2`}>Drinks</Text>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={Drinks}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Occationally"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Smokes</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={SmokeIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Occationally"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Weed</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={WeedIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Occationally"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Drugs</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={DrugIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="No"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Children</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={ChildrenIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="I do not have children"
              />
            </View>
          </View>
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
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={LocationIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="San Francisco"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>
              Religious Beliefs
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={ReligiousIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Christian"
              />
            </View>
          </View>
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
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={UnivesityIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Harbard University"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>
              Highest Level of Education
            </Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={BookIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Post-Graduate"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Job Title</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={EnginnerIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Softwae Engineer"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Work Place</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
            <SvgXml
              style={tw`absolute ml-2 z-30`}
              xml={WorkplaceIcon}
              width={20}
              height={20}
            />
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw`px-8 border-b border-0`}
                placeholder="Google"
              />
            </View>
          </View>
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
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw` border-b border-0`}
                placeholder="Exploring life, one adventure at a time 🌍✨"
              />
            </View>
          </View>
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Prompt 2</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
    
            <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw` border-b border-0`}
                placeholder="Here for genuine connections and good vibes 🌞"
              />
            </View>
            
          </View>
        
        </View>
        <View style={tw` px-[4%]`}>
          <View style={tw`flex-row my-4 gap-2 items-center`}>
            <Text style={tw`font-MontserratBold font-bold`}>Prompt 3</Text>
          </View>
          <View style={tw`flex-row pb-2 gap-2 items-center`}>
          <View style={tw`w-full relative`}>
              <InputText
                containerStyle={tw` border-b border-0`}
                placeholder="Looking for someone to join me on spontaneous road..."
              />
            </View>
           
          </View>
         
        </View>
        
      </View>
      <View style={tw`flex-row items-center justify-center gap-1  my-4`}>
      <TButton    onPress={showToast} containerStyle={tw`bg-black w-[90%]`} title='Save changes' />
     
      </View>
      
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
