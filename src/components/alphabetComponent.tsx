import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {Header} from './header';
import {Bar} from 'react-native-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Tts from 'react-native-tts';
import {
  setCompletedVocabulary,
  setCompletedListening,
  setCompletedReading,
  setCompletedMemory,
  setCompletedWriting,
} from '../redux/reducers/userReducer';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Vocabulary = ({navigation, alphabet}) => {
  const [itemsPressed, setItemsPressed] = useState(0);
  const [pressedIndices, setPressedIndices] = useState([]);
  const [modal, setModal] = useState(false);
  const [allLettersCompleted, setAllLettersCompleted] = useState(false);
  const data = [
    {
      name: require('../assets/AtoZImages/A.jpeg'),
      title: 'A',
    },
    {
      name: require('../assets/AtoZImages/B.jpeg'),
      title: 'B',
    },
    {
      name: require('../assets/AtoZImages/C.jpeg'),
      title: 'C',
    },
    {
      name: require('../assets/AtoZImages/d.jpeg'),
      title: 'D',
    },
    {
      name: require('../assets/AtoZImages/e.jpeg'),
      title: 'E',
    },
    {
      name: require('../assets/AtoZImages/f.png'),
      title: 'F',
    },
    {
      name: require('../assets/AtoZImages/g.png'),
      title: 'G',
    },
    {
      name: require('../assets/AtoZImages/h.jpeg'),
      title: 'H',
    },
    {
      name: require('../assets/AtoZImages/i.jpeg'),
      title: 'I',
    },
    {
      name: require('../assets/AtoZImages/j.jpeg'),
      title: 'J',
    },
    {
      name: require('../assets/AtoZImages/k.jpeg'),
      title: 'K',
    },
    {
      name: require('../assets/AtoZImages/l.jpeg'),
      title: 'L',
    },
    {
      name: require('../assets/AtoZImages/m.png'),
      title: 'M',
    },
    {
      name: require('../assets/AtoZImages/n.png'),
      title: 'N',
    },
    {
      name: require('../assets/AtoZImages/o.png'),
      title: 'O',
    },
    {
      name: require('../assets/AtoZImages/p.png'),
      title: 'P',
    },
    {
      name: require('../assets/AtoZImages/q.png'),
      title: 'Q',
    },
    {
      name: require('../assets/AtoZImages/r.png'),
      title: 'R',
    },
    {
      name: require('../assets/AtoZImages/s.jpeg'),
      title: 'S',
    },
    {
      name: require('../assets/AtoZImages/t.png'),
      title: 'T',
    },
    {
      name: require('../assets/AtoZImages/u.jpeg'),
      title: 'U',
    },
    {
      name: require('../assets/AtoZImages/v.png'),
      title: 'V',
    },
    {
      name: require('../assets/AtoZImages/w.png'),
      title: 'W',
    },
    {
      name: require('../assets/AtoZImages/x.jpeg'),
      title: 'X',
    },
    {
      name: require('../assets/AtoZImages/y.jpeg'),
      title: 'Y',
    },
    {
      name: require('../assets/AtoZImages/z.jpeg'),
      title: 'Z',
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    Tts.setDefaultLanguage('en-US'); // Set default language for text-to-speech
    Tts.setDefaultRate(0.5); // Set default speaking rate
    const timeout = setTimeout(() => {
      speakWord('Alphabet');
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const completedVocabularies = useSelector(
    state => state.root.user.completedVocabularies,
  );

  console.log('completedVocabularies', completedVocabularies);

  const handleItemPress = index => {
    if (!pressedIndices.includes(index)) {
      setItemsPressed(prevItemsPressed => prevItemsPressed + 1);
      setPressedIndices([...pressedIndices, index]);
      speakWord(data[index].title);
    } else {
      // If the item was already pressed, speak the word again
      speakWord(data[index].title);
    }
  };

  const isPressed = index => pressedIndices.includes(index);

  const progress = itemsPressed / data.length;

  const speakWord = word => {
    Tts.stop();
    Tts.speak(word, {language: 'de-DE'});
  };

  useEffect(() => {
    if (itemsPressed === 26) {
      setModal(true);
      // Check if alphabet is defined
    }
  }, [itemsPressed]);
  const item = itemsPressed;
  const screenName = 'alphabet';
  const handleDispatch = () => {
    dispatch(setCompletedVocabulary({item, screenName}));
    setModal(false);
  };
  console.log('alphabet', itemsPressed);

  return (
    <View style={{flex: 1}}>
      {completedVocabularies?.item === 26 &&
      completedVocabularies?.screenName === 'alphabet' ? (
        <View>
          <View style={styles.length}>
            <Text style={styles.text}>26/26</Text>
            <Bar
              progress={1}
              width={wp(75)}
              height={hp(5)}
              color="blue"
              unfilledColor="#fff"
              borderWidth={2}
              borderColor="black"
              borderRadius={10}
              style={{marginVertical: 10}}
            />
          </View>
          <ScrollView>
            <View style={styles.item}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.container,
                    {borderColor: 'blue'}, // Set border color to blue for completed letters
                  ]}>
                  <Image source={item.name} style={{width: 50, height: 50}} />
                  <Text style={{fontSize: 20}}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View>
          <View style={styles.length}>
            <Text style={styles.text}>{itemsPressed}/26</Text>
            <Bar
              progress={progress}
              width={wp(75)}
              height={hp(5)}
              color="blue"
              unfilledColor="#fff"
              borderWidth={2}
              borderColor="black"
              borderRadius={10}
              style={{marginVertical: 10}}
            />
          </View>
          <ScrollView>
            <View style={styles.item}>
              {data.map((item, index) => (
                <TouchableOpacity
                  onPress={() => handleItemPress(index)}
                  key={index}
                  style={[
                    styles.container,
                    isPressed(index) && {borderColor: 'blue'},
                  ]}>
                  <Image source={item.name} style={{width: 50, height: 50}} />
                  <Text style={{fontSize: 20}}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => setModal(false)}>
            <View style={styles.modal}>
              <View style={styles.modalView}>
                <Text style={{fontSize: 20, margin: 20}}>ccomplete</Text>
                <TouchableOpacity
                  onPress={handleDispatch}
                  style={styles.okView}>
                  <Text style={styles.okText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

//   Listning component

export const Listening = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [spokenWord, setSpokenWord] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const options = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  useEffect(() => {
    getSelectedArray();
  }, [currentQuestion]);

  const getSelectedArray = async () => {
    let shuffledArray = await shuffleArray([...options]);
    console.log('shuffledArray', shuffledArray);
    const randomValues = shuffledArray.slice(0, 4);
    console.log('randomValues', randomValues);
    setShuffledOptions([...randomValues]);
    // setTimeout(() => {
    speakWord(randomValues);
    // }, 5000);
  };

  const speakWord = randomValues => {
    // const word = shuffledOptions[currentQuestion];
    console.log('shuffledOptions', randomValues);
    const randomIndex = Math.floor(Math.random() * randomValues.length);

    // Get the word at the random index
    const randomWord = randomValues[randomIndex];
    setSpokenWord(randomWord);
    Tts.speak(randomWord);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    if (option === spokenWord) {
      setProgress(progress + 1);
      if (progress >= 9) {
        // navigation.goBack();
        // setShowModal(true);
      } else {
        setCurrentQuestion(Math.floor(Math.random() * options.length));
      }
    }
  };

  const handleVolumeIconPress = () => {
    Tts.setDefaultLanguage('en-US'); // Set default language for text-to-speech
    Tts.setDefaultRate(0.5);
    speakWord(shuffledOptions);
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const dispatch = useDispatch();
  const item2 = progress;
  const screenName = 'alphabet';
  useEffect(() => {
    if (progress >= 9) {
      dispatch(setCompletedListening({item2, screenName}));
    }
  });
  return (
    <View>
      <View style={styles.lengthProgress}>
        <Text style={styles.textProgress}>{progress}/10</Text>
        <Bar
          progress={progress / 10}
          width={wp(75)} // Example width using wp for responsive width
          height={hp(5)} // Example height using hp for responsive height
          color="blue" // Example color
          unfilledColor="#fff" // Example unfilled color
          borderWidth={2} // Example border width
          borderColor="black" // Example border color
          borderRadius={10}
          style={{marginVertical: 10}}
        />
      </View>
      <TouchableOpacity
        style={styles.volumeIcon}
        onPress={handleVolumeIconPress}>
        <Feather name="volume-2" color={'#fff'} size={50} />
      </TouchableOpacity>
      <View style={styles.mcqs}>
        {shuffledOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && {
                borderColor: option === spokenWord ? 'green' : 'red',
              },
            ]}
            onPress={() => handleOptionSelect(option)}
            disabled={!spokenWord}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={{}}>
              <AntDesign name="checkcircle" color={'#046928'} size={50} />
              <View style={styles.okView}>
                <Text style={styles.okText}>OK</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

//  reading component

export const Reading = () => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [spokenWord, setSpokenWord] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const options = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  useEffect(() => {
    getSelectedArray();
  }, [currentQuestion]);

  const getSelectedArray = async () => {
    let shuffledArray = await shuffleArray([...options]);
    const randomValues = shuffledArray.slice(0, 4);
    setShuffledOptions([...randomValues]);
    const randomIndex = Math.floor(Math.random() * randomValues.length);
    const randomWord = randomValues[randomIndex];
    setSpokenWord(randomWord);
  };

  const speakWord = () => {
    Tts.speak(spokenWord);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    if (option === spokenWord) {
      setProgress(progress + 1);
      if (progress >= 9) {
        // setShowModal(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
      speakWord();
    }
  };

  //   const getSelectedArray = async () => {
  //     let shuffledArray = await shuffleArray([...options]);
  //     console.log('shuffledArray', shuffledArray);
  //     const randomValues = shuffledArray.slice(0, 4);
  //     console.log('randomValues', randomValues);
  //     setShuffledOptions([...randomValues]);
  //     speakWord(randomValues);
  //   };

  //   const speakWord = randomValues => {
  //     // const word = shuffledOptions[currentQuestion];
  //     console.log('shuffledOptions', randomValues);
  //     const randomIndex = Math.floor(Math.random() * randomValues.length);

  //     // Get the word at the random index
  //     const randomWord = randomValues[randomIndex];
  //     setSpokenWord(randomWord);
  //     Tts.speak(randomWord);
  //   };

  //   const handleOptionSelect = option => {
  //     setSelectedOption(option);
  //     if (option === spokenWord) {
  //       setProgress(progress + 1);
  //       if (progress >= 9) {
  //         // navigation.goBack();
  //         // setShowModal(true);
  //       } else {
  //         setCurrentQuestion(Math.floor(Math.random() * options.length));
  //       }
  //     }
  //   };

  //   const handleVolumeIconPress = () => {
  //     Tts.setDefaultLanguage('en-US'); // Set default language for text-to-speech
  //     Tts.setDefaultRate(0.5);
  //     speakWord(shuffledOptions);
  //   };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const dispatch = useDispatch();
  const item3 = progress;
  const screenName = 'alphabet';
  useEffect(() => {
    if (progress >= 9) {
      dispatch(setCompletedReading({item3, screenName}));
    }
  });
  return (
    <View>
      <View style={styles.lengthProgress}>
        <Text style={styles.textProgress}>{progress}/10</Text>
        <Bar
          progress={progress / 10}
          width={wp(75)} // Example width using wp for responsive width
          height={hp(5)} // Example height using hp for responsive height
          color="blue" // Example color
          unfilledColor="#fff" // Example unfilled color
          borderWidth={2} // Example border width
          borderColor="black" // Example border color
          borderRadius={10}
          style={{marginVertical: 10}}
        />
      </View>
      <TouchableOpacity
        style={styles.volumeIcon}
        // onPress={handleVolumeIconPress}
      >
        <Text style={styles.spokenWordText}>{spokenWord}</Text>
      </TouchableOpacity>
      <View style={styles.mcqs}>
        {shuffledOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && {
                borderColor: option === spokenWord ? 'green' : 'red',
              },
            ]}
            onPress={() => handleOptionSelect(option)}
            disabled={!spokenWord}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={{}}>
              <AntDesign name="checkcircle" color={'#046928'} size={50} />
              <View style={styles.okView}>
                <Text style={styles.okText}>OK</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(25),
    padding: 10,
    borderWidth: 4,
    borderColor: 'gray',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: wp(100),
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  length: {
    width: wp(90),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  //listening style,

  lengthProgress: {
    width: wp(90),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  textProgress: {
    fontSize: 16,
    color: '#000',
  },
  volumeIcon: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp(10),
    borderRadius: 90,
    backgroundColor: '#046928',
    alignSelf: 'center',
    padding: 24,
  },
  mcqs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  option: {
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    margin: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionText: {
    fontSize: 50,
    padding: 10,
  },
  modalView: {
    width: wp(50),
    backgroundColor: '#fff',
  },
  okView: {
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  okText: {
    fontSize: 20,
    color: '#000',
    padding: 10,
  },
  spokenWordText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
