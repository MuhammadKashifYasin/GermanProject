import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import { Header } from "./header";
import { Bar } from "react-native-progress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Tts from "react-native-tts";
import {
  setCompletedVocabulary,
  setCompletedListening,
  setCompletedReading,
  setCompletedMemory,
  setCompletedWriting,
} from "../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export const Vocabulary = ({ goBack, backgroundColor, title }) => {
  const [itemsPressed, setItemsPressed] = useState(0);
  const [pressedIndices, setPressedIndices] = useState([]);
  const [allLettersCompleted, setAllLettersCompleted] = useState(false);
  const data = [
    {
      name: "0",
      title: "NULL",
    },
    {
      name: "1",
      title: "EINS",
    },
    {
      name: "2",
      title: "ZWEI",
    },
    {
      name: "3",
      title: "DREI",
    },
    {
      name: "4",
      title: "VIER",
    },
    {
      name: "5",
      title: "FÜNF",
    },
    {
      name: "6",
      title: "SECHS",
    },
    {
      name: "7",
      title: "SIEBEN",
    },
    {
      name: "8",
      title: "ACHT",
    },
    {
      name: "9",
      title: "NEUN",
    },
    {
      name: "10",
      title: "ZEHN",
    },
    {
      name: "11",
      title: "ELF",
    },
    {
      name: "12",
      title: "ZWÖLF",
    },
    {
      name: "13",
      title: "DREIZEHN",
    },
    {
      name: "14",
      title: "VIERZEHN",
    },
    {
      name: "15",
      title: "FÜNFZEHN",
    },
    {
      name: "16",
      title: "SECHZEHN",
    },
    {
      name: "17",
      title: "SIEBZEHN",
    },
    {
      name: "18",
      title: "ACHTZEHN",
    },
    {
      name: "19",
      title: "NEUNZEHN",
    },
    {
      name: "20",
      title: "ZWANZIG",
    },
    {
      name: "21",
      title: "EINUNDZWANZIG",
    },
    {
      name: "22",
      title: "ZWEIUNDZWANZIG",
    },
    {
      name: "23",
      title: "DREIUNDZWANZIG",
    },
    {
      name: "30",
      title: "DREISSIG",
    },
    {
      name: "40",
      title: "VIERZIG",
    },
    {
      name: "50",
      title: "FÜNFZIG",
    },
    {
      name: "60",
      title: "SECHZIG",
    },
    {
      name: "70",
      title: "SIEBZIG",
    },
    {
      name: "80",
      title: "ACHTZIG",
    },
    {
      name: "90",
      title: "NEUNZIG",
    },
    {
      name: "100",
      title: "HUNDERT",
    },
    {
      name: "101",
      title: "HUNNDERTEINS",
    },
    {
      name: "200",
      title: "ZWEIHUNDERT",
    },
    {
      name: "300",
      title: "DREIHUNDERT",
    },
    {
      name: "1000",
      title: "TAUSEND",
    },
    {
      name: "1000000",
      title: "EINE MILLION",
    },
  ];

  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    Tts.setDefaultLanguage("de-DE"); // Set default language for text-to-speech
    Tts.setDefaultRate(0.5); // Set default speaking rate
    const timeout = setTimeout(() => {
      speakWord("ZAHLEN");
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const completedVocabularies = useSelector(
    (state) => state.root.user.completedVocabularies
  );

  console.log("completedVocabularies", completedVocabularies);

  const handleItemPress = (index) => {
    if (!pressedIndices.includes(index)) {
      setItemsPressed((prevItemsPressed) => prevItemsPressed + 1);
      setPressedIndices([...pressedIndices, index]);
      speakWord(data[index].title);
    } else {
      // If the item was already pressed, speak the word again
      speakWord(data[index].title);
    }
  };

  const isPressed = (index) => pressedIndices.includes(index);

  const progress = itemsPressed / data.length;

  const speakWord = (word) => {
    Tts.stop();
    Tts.speak(word, { language: "de-DE" });
  };

  const item = itemsPressed;
  const screenName = "number";

  useEffect(() => {
    if (itemsPressed === 37) {
      dispatch(setCompletedVocabulary({ item, screenName }));
    }
  }, [itemsPressed]);

  useEffect(() => {
    if (itemsPressed === 37) {
      setTimeout(() => {
        navigation.navigate("dashboared");
      }, 2000);
    }
  }, [itemsPressed]);
  return (
    <View style={{ flex: 1, marginBottom: hp(14) }}>
      <Header
        navigation={goBack}
        title={title}
        backgroundColor={backgroundColor}
      />
      {completedVocabularies?.item === 37 &&
      completedVocabularies?.screenName === "number" ? (
        <View>
          <View style={styles.length}>
            <Text style={styles.text}>37/37</Text>
            <Bar
              progress={1}
              width={wp(75)}
              height={hp(5)}
              color="#6495ED"
              unfilledColor="#caf0f8"
              borderWidth={2}
              borderColor="black"
              borderRadius={10}
              style={{ marginVertical: 10 }}
            />
          </View>
          <ScrollView>
            <View style={styles.item}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.container,
                    { borderColor: "#6495ED" }, // Set border color to blue for completed letters
                  ]}
                >
                  <Text style={{ fontSize: 30 }}>{item.name}</Text>
                  <Text style={{ fontSize: 20 }}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View>
          <View style={styles.length}>
            <Text style={styles.text}>{itemsPressed}/37</Text>
            <Bar
              progress={progress}
              width={wp(75)}
              height={hp(5)}
              color="#6495ED"
              unfilledColor="#D2eafb"
              borderRadius={15}
              style={{ marginVertical: 10 }}
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
                    isPressed(index) && { borderColor: "#6495ED" },
                  ]}
                >
                  <Text
                    style={{ fontSize: 30, color: "#000", fontWeight: "bold" }}
                  >
                    {item.name}
                  </Text>

                  <Text style={{ fontSize: 20, padding: 10, color: "#000" }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

//   Listning component

export const Listening = ({ goBack, backgroundColor, title }) => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [spokenWord, setSpokenWord] = useState(null);
  const [shuffledImages, setShuffledImages] = useState([]);

  const imagesWithTitles = [
    {
      name: "0",
      title: "NULL",
    },
    {
      name: "1",
      title: "EINS",
    },
    {
      name: "2",
      title: "ZWEI",
    },
    {
      name: "3",
      title: "DREI",
    },
    {
      name: "4",
      title: "VIER",
    },
    {
      name: "5",
      title: "FÜNF",
    },
    {
      name: "6",
      title: "SECHS",
    },
    {
      name: "7",
      title: "SIEBEN",
    },
    {
      name: "8",
      title: "ACHT",
    },
    {
      name: "9",
      title: "NEUN",
    },
    {
      name: "10",
      title: "ZEHN",
    },
    {
      name: "11",
      title: "ELF",
    },
    {
      name: "12",
      title: "ZWÖLF",
    },
    {
      name: "13",
      title: "DREIZEHN",
    },
    {
      name: "14",
      title: "VIERZEHN",
    },
    {
      name: "15",
      title: "FÜNFZEHN",
    },
    {
      name: "16",
      title: "SECHZEHN",
    },
    {
      name: "17",
      title: "SIEBZEHN",
    },
    {
      name: "18",
      title: "ACHTZEHN",
    },
    {
      name: "19",
      title: "NEUNZEHN",
    },
    {
      name: "20",
      title: "ZWANZIG",
    },
    {
      name: "21",
      title: "EINUNDZWANZIG",
    },
    {
      name: "22",
      title: "ZWEIUNDZWANZIG",
    },
    {
      name: "23",
      title: "DREIUNDZWANZIG",
    },
    {
      name: "30",
      title: "DREISSIG",
    },
    {
      name: "40",
      title: "VIERZIG",
    },
    {
      name: "50",
      title: "FÜNFZIG",
    },
    {
      name: "60",
      title: "SECHZIG",
    },
    {
      name: "70",
      title: "SIEBZIG",
    },
    {
      name: "80",
      title: "ACHTZIG",
    },
    {
      name: "90",
      title: "NEUNZIG",
    },
    {
      name: "100",
      title: "HUNDERT",
    },
    {
      name: "101",
      title: "HUNNDERTEINS",
    },
    {
      name: "200",
      title: "ZWEIHUNDERT",
    },
    {
      name: "300",
      title: "DREIHUNDERT",
    },
    {
      name: "1000",
      title: "TAUSEND",
    },
    {
      name: "1000000",
      title: "EINE MILLION",
    },
  ];

  useEffect(() => {
    getSelectedArray();
  }, [currentQuestion]);

  const getSelectedArray = async () => {
    let shuffledArray = await shuffleArray([...imagesWithTitles]);
    const randomValues = shuffledArray.slice(0, 4);
    setShuffledImages([...randomValues]);
    speakWord(randomValues);
  };

  // const getSelectedArray = async () => {
  //   let shuffledArray = await shuffleArray([...options]);
  //   console.log("shuffledArray", shuffledArray);
  //   const randomValues = shuffledArray.slice(0, 4);
  //   console.log("randomValues", randomValues);
  //   setShuffledOptions([...randomValues]);
  //   // setTimeout(() => {
  //   speakWord(randomValues);
  //   // }, 5000);
  // };

  const speakWord = (randomImages) => {
    // const word = shuffledOptions[currentQuestion];
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    // setSpokenWord(randomImages[randomIndex]);
    const randomWord = randomImages[randomIndex].title;
    setSpokenWord(randomWord);
    Tts.speak(randomWord);
  };

  const handleOptionSelect = (selectedItem) => {
    if (selectedItem) {
      if (selectedItem.title === spokenWord) {
        console.log("Correct word selected:", spokenWord);
        setProgress(progress + 1);
        if (progress <= 9) {
          setTimeout(() => {
            getSelectedArray();
          }, 1500);
        }
        setSelectedOption(selectedItem); // Highlight selected option
        return; // Exit function early
      } else {
        // Wrong word selected
        setSelectedOption(selectedItem); // Highlight selected option with red border
        setTimeout(() => {
          setSelectedOption(null); // Clear selected option after 2 seconds
        }, 2000);
      }
    }
  };

  const handleVolumeIconPress = () => {
    Tts.setDefaultLanguage("en-US"); // Set default language for text-to-speech
    Tts.setDefaultRate(0.5);
    if (progress <= 9) {
      speakWord(shuffledImages);
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const item2 = progress;
  const screenName = "number";
  useEffect(() => {
    if (progress > 9) {
      dispatch(setCompletedListening({ item2, screenName }));
      setTimeout(() => {
        navigation.navigate("dashboared");
      });
    }
  }, [progress]);

  return (
    <View>
      <Header
        navigation={goBack}
        title={title}
        backgroundColor={backgroundColor}
      />

      <View style={styles.lengthProgress}>
        <Text style={styles.textProgress}>{progress}/10</Text>
        <Bar
          progress={progress / 10}
          width={wp(75)} // Example width using wp for responsive width
          height={hp(5)} // Example height using hp for responsive height
          color="#4caf50" // Example color
          unfilledColor="#D8f1dc"
          borderRadius={15}
          style={{ marginVertical: 15 }}
        />
      </View>
      <TouchableOpacity
        style={[styles.volumeIcon, { backgroundColor: "#4caf50" }]}
        onPress={handleVolumeIconPress}
      >
        <Feather name="volume-2" color={"#fff"} size={50} />
      </TouchableOpacity>
      <View style={styles.mcqs}>
        {shuffledImages?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === item && {
                borderColor: item.title === spokenWord ? "green" : "red",
                padding: 15,
              },
            ]}
            onPress={() => handleOptionSelect(item)}
            disabled={!spokenWord}
          >
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 30 }}>
              {item.name}
            </Text>
            {/* <Image source={item.name} style={styles.optionsImage} /> */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

//  reading component

export const Reading = ({ goBack, backgroundColor, title }) => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [spokenWord, setSpokenWord] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const options = [
    {
      name: "0",
      title: "NULL",
    },
    {
      name: "1",
      title: "EINS",
    },
    {
      name: "2",
      title: "ZWEI",
    },
    {
      name: "3",
      title: "DREI",
    },
    {
      name: "4",
      title: "VIER",
    },
    {
      name: "5",
      title: "FÜNF",
    },
    {
      name: "6",
      title: "SECHS",
    },
    {
      name: "7",
      title: "SIEBEN",
    },
    {
      name: "8",
      title: "ACHT",
    },
    {
      name: "9",
      title: "NEUN",
    },
    {
      name: "10",
      title: "ZEHN",
    },
    {
      name: "11",
      title: "ELF",
    },
    {
      name: "12",
      title: "ZWÖLF",
    },
    {
      name: "13",
      title: "DREIZEHN",
    },
    {
      name: "14",
      title: "VIERZEHN",
    },
    {
      name: "15",
      title: "FÜNFZEHN",
    },
    {
      name: "16",
      title: "SECHZEHN",
    },
    {
      name: "17",
      title: "SIEBZEHN",
    },
    {
      name: "18",
      title: "ACHTZEHN",
    },
    {
      name: "19",
      title: "NEUNZEHN",
    },
    {
      name: "20",
      title: "ZWANZIG",
    },
    {
      name: "21",
      title: "EINUNDZWANZIG",
    },
    {
      name: "22",
      title: "ZWEIUNDZWANZIG",
    },
    {
      name: "23",
      title: "DREIUNDZWANZIG",
    },
    {
      name: "30",
      title: "DREISSIG",
    },
    {
      name: "40",
      title: "VIERZIG",
    },
    {
      name: "50",
      title: "FÜNFZIG",
    },
    {
      name: "60",
      title: "SECHZIG",
    },
    {
      name: "70",
      title: "SIEBZIG",
    },
    {
      name: "80",
      title: "ACHTZIG",
    },
    {
      name: "90",
      title: "NEUNZIG",
    },
    {
      name: "100",
      title: "HUNDERT",
    },
    {
      name: "101",
      title: "HUNNDERTEINS",
    },
    {
      name: "200",
      title: "ZWEIHUNDERT",
    },
    {
      name: "300",
      title: "DREIHUNDERT",
    },
    {
      name: "1000",
      title: "TAUSEND",
    },
    {
      name: "1000000",
      title: "EINE MILLION",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      getSelectedArray();
    }, 1500);
  }, [currentQuestion]);

  const getSelectedArray = async () => {
    let shuffledArray = await shuffleArray([...options]);
    const randomValues = shuffledArray.slice(0, 4);
    setShuffledOptions([...randomValues]);
    const randomIndex = Math.floor(Math.random() * randomValues.length);
    const randomWord = randomValues[randomIndex].title;
    setSpokenWord(randomWord);
  };

  const speakWord = () => {
    Tts.speak(spokenWord);
  };

  const handleOptionSelect = (selectedItem) => {
    if (selectedItem) {
      if (selectedItem.title === spokenWord) {
        console.log("Correct word selected:", spokenWord);
        setProgress(progress + 1);
        if (progress <= 9) {
          setTimeout(() => {
            getSelectedArray();
          }, 1500);
        }
        setSelectedOption(selectedItem);
        speakWord();
        // No need to speak here, the word is already spoken initially
        return;
      } else {
        setSelectedOption(selectedItem);
        setTimeout(() => {
          setSelectedOption(null);
        }, 2000);
      }
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const item3 = progress;
  const screenName = "number";
  useEffect(() => {
    if (progress > 9) {
      dispatch(setCompletedReading({ item3, screenName }));
      setTimeout(() => {
        navigation.navigate("dashboared");
      }, 1500);
    }
  });
  return (
    <View>
      <Header
        navigation={goBack}
        title={title}
        backgroundColor={backgroundColor}
      />

      <View style={styles.lengthProgress}>
        <Text style={styles.textProgressPink}>{progress}/10</Text>
        <Bar
          progress={progress / 10}
          width={wp(75)} // Example width using wp for responsive width
          height={hp(5)} // Example height using hp for responsive height
          color="#fb59d9" // Example color
          unfilledColor="#ffcff5"
          borderRadius={15}
          style={{ marginVertical: 15 }}
        />
      </View>
      {/* <TouchableOpacity
        style={styles.volumeIcon}
        // onPress={handleVolumeIconPress}
      > */}
      <View style={[styles.volumeIcon, { width: wp(80) }]}>
        <Text style={styles.spokenWordText}>{spokenWord}</Text>
      </View>
      {/* </TouchableOpacity> */}
      <View style={styles.mcqs}>
        {shuffledOptions?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === item && {
                borderColor: item.title === spokenWord ? "green" : "red",
              },
            ]}
            onPress={() => handleOptionSelect(item)}
            disabled={!spokenWord}
          >
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 18 }}>
              {item.name}
            </Text>
            {/* <Image source={item.image} style={styles.optionsImage} /> */}
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={{}}>
              <AntDesign name="checkcircle" color={"#046928"} size={50} />
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

export const Memory = ({ goBack, backgroundColor, title }) => {
  const [upperState, setUpperState] = useState([]);
  const [lowerState, setLowerState] = useState([]);
  const [wordArray, setWordArray] = useState([]);
  const [progress, setProgress] = useState(0);
  const [selectedLowerWord, setSelectedLowerWord] = useState("");
  const [selectedUpperWord, setSelectedUpperWord] = useState("");
  const [selectedWordArray, setSelectedWordArray] = useState([]);
  const [shuffledOnce, setShuffledOnce] = useState(false);

  const options = [
    "NULL",
    "EINS",
    "ZWEI",
    "DREI",
    "VIER",
    "FÜNF",
    "SECHS",
    "SIEBEN",
    "ACHT",
    "NEUN",
    "ZEHN",
    "ELF",
    "ZWÖLF",
    "DREIZEHN",
    "VIERZEHN",
    "FÜNFZEHN",
    "SECHZEHN",
    "SIEBZEHN",
    "ACHTZEHN",
    "NEUNZEHN",
    "ZWANZIG",
    "EINUNDZWANZIG",
    "ZWEIUNDZWANZIG",
    "DREIUNDZWANZIG",
    "DREISSIG",
    "VIERZIG",
    "FÜNFZIG",
    "SECHZIG",
    "SIEBZIG",
    "ACHTZIG",
    "NEUNZIG",
    "HUNDERT",
    "HUNNDERTEINS",
    "ZWEIHUNDERT",
    "DREIHUNDERT",
    "TAUSEND",
    "EINE MILLION",
  ];

  const ImageArr = [
    {
      name: "0",
      title: "NULL",
    },
    {
      name: "1",
      title: "EINS",
    },
    {
      name: "2",
      title: "ZWEI",
    },
    {
      name: "3",
      title: "DREI",
    },
    {
      name: "4",
      title: "VIER",
    },
    {
      name: "5",
      title: "FÜNF",
    },
    {
      name: "6",
      title: "SECHS",
    },
    {
      name: "7",
      title: "SIEBEN",
    },
    {
      name: "8",
      title: "ACHT",
    },
    {
      name: "9",
      title: "NEUN",
    },
    {
      name: "10",
      title: "ZEHN",
    },
    {
      name: "11",
      title: "ELF",
    },
    {
      name: "12",
      title: "ZWÖLF",
    },
    {
      name: "13",
      title: "DREIZEHN",
    },
    {
      name: "14",
      title: "VIERZEHN",
    },
    {
      name: "15",
      title: "FÜNFZEHN",
    },
    {
      name: "16",
      title: "SECHZEHN",
    },
    {
      name: "17",
      title: "SIEBZEHN",
    },
    {
      name: "18",
      title: "ACHTZEHN",
    },
    {
      name: "19",
      title: "NEUNZEHN",
    },
    {
      name: "20",
      title: "ZWANZIG",
    },
    {
      name: "21",
      title: "EINUNDZWANZIG",
    },
    {
      name: "22",
      title: "ZWEIUNDZWANZIG",
    },
    {
      name: "23",
      title: "DREIUNDZWANZIG",
    },
    {
      name: "30",
      title: "DREISSIG",
    },
    {
      name: "40",
      title: "VIERZIG",
    },
    {
      name: "50",
      title: "FÜNFZIG",
    },
    {
      name: "60",
      title: "SECHZIG",
    },
    {
      name: "70",
      title: "SIEBZIG",
    },
    {
      name: "80",
      title: "ACHTZIG",
    },
    {
      name: "90",
      title: "NEUNZIG",
    },
    {
      name: "100",
      title: "HUNDERT",
    },
    {
      name: "101",
      title: "HUNNDERTEINS",
    },
    {
      name: "200",
      title: "ZWEIHUNDERT",
    },
    {
      name: "300",
      title: "DREIHUNDERT",
    },
    {
      name: "1000",
      title: "TAUSEND",
    },
    {
      name: "1000000",
      title: "EINE MILLION",
    },
  ];

  useEffect(() => {
    if (!shuffledOnce && progress === 0) {
      const shuffledArray = shuffleArray([...options]);
      setUpperState(shuffledArray.slice(0, 6));
      setLowerState(shuffleArray(shuffledArray.slice(0, 6)));
      setShuffledOnce(true); // Update the state to indicate useEffect has been triggered
    } else if (shuffledOnce && progress === 6) {
      setSelectedWordArray([]);
      const shuffledArray = shuffleArray([...options]);
      setUpperState(shuffledArray.slice(0, 6));
      setLowerState(shuffleArray(shuffledArray.slice(0, 6)));
    }
  }, [progress, shuffledOnce]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleOptionSelect = (value) => {
    console.log("handleOptionSelect option", value);
    if (selectedLowerWord == "") {
      setSelectedUpperWord(value);
    } else {
      let isValue = value === selectedLowerWord;
      console.log("handleUpperOptionSelect", isValue);
      if (isValue) {
        let tempArray = [];
        tempArray.push(selectedLowerWord);
        setSelectedWordArray((prevArray) => [...prevArray, ...tempArray]);
        Tts.speak(selectedLowerWord);
        setProgress(progress + 1);
      } else {
        setSelectedLowerWord("");
      }
    }
  };

  console.log("selectedWordArray", selectedWordArray);

  const handleLowerOptionSelect = (option) => {
    console.log("handleLowerOptionSelect option", option);
    if (selectedUpperWord == "") {
      setSelectedLowerWord(option);
    } else {
      let isValue = option === selectedUpperWord;
      console.log("handleLowerOptionSelect", isValue);
      if (isValue) {
        let tempArray = [];
        tempArray.push(selectedUpperWord);
        setSelectedWordArray((prevArray) => [...prevArray, ...tempArray]);
        Tts.speak(selectedUpperWord);
        setProgress(progress + 1);
      } else {
        setSelectedUpperWord("");
      }
    }
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const dispatchData = () => {
    const item4 = progress;
    const screenName = "number";
    if (progress === 12) {
      dispatch(setCompletedMemory({ item4, screenName }));
    }
  };

  useEffect(() => {
    dispatchData();
  }, [progress]);

  useEffect(() => {
    if (progress === 12) {
      navigation.navigate("dashboared"); // Ensure correct spelling
    }
  }, [progress, navigation]);

  return (
    <View>
      <Header
        navigation={goBack}
        title={title}
        backgroundColor={backgroundColor}
      />

      <View style={styles.lengthProgress}>
        <Text style={[styles.textProgress, { color: "#e68d00" }]}>
          {progress}/12
        </Text>
        <Bar
          progress={progress / 12}
          width={wp(75)} // Example width using wp for responsive width
          height={hp(5)} // Example height using hp for responsive height
          color="#e68d00" // Example color
          unfilledColor="#ffe7c3"
          borderRadius={15}
          style={{ marginVertical: 15 }}
        />
      </View>
      <View style={[styles.mcqs, { width: wp(100) }]}>
        {upperState?.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionSelectionViewMatching,
              {
                backgroundColor:
                  selectedWordArray.includes(option) ||
                  selectedUpperWord == option
                    ? "#fff"
                    : "#ee9200",
                borderColor: selectedWordArray.includes(option)
                  ? "green"
                  : "#cf7f01",
                opacity: selectedWordArray.includes(option) ? 0.1 : 1,
              },
            ]}
            onPress={() => {
              setSelectedUpperWord(option), handleOptionSelect(option);
            }}
            disabled={selectedWordArray.includes(option)}
          >
            <Text
              style={[
                styles.optionSelectionText,
                {
                  color: selectedUpperWord == option ? "black" : "white",
                  fontSize: 18,
                },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.mcqs}>
        {lowerState?.map((option, index) => {
          const filteredImages = ImageArr.filter(
            (item) => item.title === option
          );
          if (filteredImages.length > 0) {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionBView,
                  {
                    borderColor:
                      selectedLowerWord === option
                        ? "orange"
                        : selectedWordArray.includes(option)
                        ? "green"
                        : "gray",
                    opacity: selectedWordArray.includes(option) ? 0.1 : 1,
                    padding: 9,
                  },
                ]}
                onPress={() => {
                  handleLowerOptionSelect(option);
                }}
                disabled={selectedWordArray.includes(option)}
              >
                {/* Assuming you want to display the image */}
                {/* <Image
                  source={filteredImages[0].name}
                  style={styles.optionBImage}
                /> */}
                <Text
                  style={{ color: "#000", fontWeight: "bold", fontSize: 40 }}
                >
                  {filteredImages[0].name}
                </Text>
              </TouchableOpacity>
            );
          } else {
            return null; // No matching image found for the option
          }
        })}
      </View>
    </View>
  );
};

export const Writing = ({ goBack, backgroundColor, title }) => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [spokenWord, setSpokenWord] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedWord, setSelectedWord] = useState("");
  const [randomized, setRandomized] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledLetters, setShuffledLetters] = useState([]);
  console.log("🚀 ~ Writing ~ shuffledLetters:", shuffledLetters);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [borderColor, setBorderColor] = useState("gray");

  const options = [
    {
      name: "0",
      title: "NULL",
    },
    {
      name: "1",
      title: "EINS",
    },
    {
      name: "2",
      title: "ZWEI",
    },
    {
      name: "3",
      title: "DREI",
    },
    {
      name: "4",
      title: "VIER",
    },
    {
      name: "5",
      title: "FÜNF",
    },
    {
      name: "6",
      title: "SECHS",
    },
    {
      name: "7",
      title: "SIEBEN",
    },
    {
      name: "8",
      title: "ACHT",
    },
    {
      name: "9",
      title: "NEUN",
    },
    {
      name: "10",
      title: "ZEHN",
    },
    {
      name: "11",
      title: "ELF",
    },
    {
      name: "12",
      title: "ZWÖLF",
    },
    {
      name: "13",
      title: "DREIZEHN",
    },
    {
      name: "14",
      title: "VIERZEHN",
    },
    {
      name: "15",
      title: "FÜNFZEHN",
    },
    {
      name: "16",
      title: "SECHZEHN",
    },
    {
      name: "17",
      title: "SIEBZEHN",
    },
    {
      name: "18",
      title: "ACHTZEHN",
    },
    {
      name: "19",
      title: "NEUNZEHN",
    },
    {
      name: "20",
      title: "ZWANZIG",
    },
    {
      name: "21",
      title: "EINUNDZWANZIG",
    },
    {
      name: "22",
      title: "ZWEIUNDZWANZIG",
    },
    {
      name: "23",
      title: "DREIUNDZWANZIG",
    },
    {
      name: "30",
      title: "DREISSIG",
    },
    {
      name: "40",
      title: "VIERZIG",
    },
    {
      name: "50",
      title: "FÜNFZIG",
    },
    {
      name: "60",
      title: "SECHZIG",
    },
    {
      name: "70",
      title: "SIEBZIG",
    },
    {
      name: "80",
      title: "ACHTZIG",
    },
    {
      name: "90",
      title: "NEUNZIG",
    },
    {
      name: "100",
      title: "HUNDERT",
    },
    {
      name: "101",
      title: "HUNNDERTEINS",
    },
    {
      name: "200",
      title: "ZWEIHUNDERT",
    },
    {
      name: "300",
      title: "DREIHUNDERT",
    },
    {
      name: "1000",
      title: "TAUSEND",
    },
    {
      name: "1000000",
      title: "EINEMILLION",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      getSelectedArray();
    }, 1000);
  }, [currentQuestion]);

  const getSelectedArray = async () => {
    let shuffledArray = await shuffleArray([...options]);
    const randomValues = shuffledArray.slice(0, 1);
    setShuffledOptions([...randomValues]);
    speakWord(randomValues);
  };

  useEffect(() => {
    if (spokenWord) {
      const shuffledWord = shuffleArray(spokenWord.title.split(""));
      setShuffledLetters(shuffledWord);
    }
  }, [spokenWord]);

  const speakWord = (randomValues) => {
    // const word = shuffledOptions[currentQuestion];
    console.log("shuffledOptions", randomValues);
    const randomIndex = Math.floor(Math.random() * randomValues.length);

    // Get the word at the random index
    const randomWord = randomValues[randomIndex];
    setSpokenWord(randomWord);
    Tts.speak(randomWord.title, { language: "de-DE" });
  };

  const handleOptionSelect = (letter: any, index: number) => {
    console.log("🚀 ~ handleOptionSelect ~ index:", index);
    const updatedShuffledLetters = [...shuffledLetters];
    updatedShuffledLetters[index] = "";
    setShuffledLetters(updatedShuffledLetters);

    const updatedSelectedLetters = [...selectedLetters];
    updatedSelectedLetters.push(letter); // Push the selected letter to the selected letters array

    setSelectedLetters(updatedSelectedLetters); // Update the selected letters state

    // Construct the selected word from the selected letters array
    const updatedSelectedWord = updatedSelectedLetters.join("");
    setSelectedWord(updatedSelectedWord); // Update the selected word state

    console.log("handleOptionSelect", letter);
    console.log("selectedLetters", updatedSelectedLetters);
    console.log("selectedWord", updatedSelectedWord);
  };
  const speakNextWord = () => {
    if (currentWordIndex < options.length - 1) {
      const nextWord = options[currentWordIndex + 1];
      setSpokenWord(nextWord);
      Tts.speak(nextWord.title);
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      // End of the game or level, handle accordingly
    }
  };

  console.log("selected word=====>", selectedWord);
  useEffect(() => {
    if (shuffledLetters.length > 0) {
      console.log("selected word", selectedWord, shuffledOptions[0].title);

      const updatedSelectedLetters = shuffledLetters.filter(
        (letter) => letter !== ""
      );
      if (updatedSelectedLetters.length === 0) {
        if (shuffledOptions[0].title == selectedWord) {
          setBorderColor("green"); // Set border color to green
          Tts.speak("Excellent");
          setProgress(progress + 1);
          setTimeout(() => {
            setBorderColor("gray"); // Revert the border color to its original state after 2 seconds
            setShuffledLetters([]);
            setSelectedWord("");
            setSelectedLetters([]);
            getSelectedArray();
          }, 3000);
        } else {
          Tts.speak("try again");
          setSelectedWord("");
          setSelectedLetters([]);
          const shuffledWord = shuffleArray(spokenWord.title.split(""));
          setShuffledLetters(shuffledWord);
          setTimeout(() => {
            setBorderColor("gray"); // Revert the border color to its original state
          }, 2000);
        }
      }
    }
  }, [shuffledLetters]);

  const handleVolumeIconPress = () => {
    Tts.setDefaultLanguage("en-US"); // Set default language for text-to-speech
    Tts.setDefaultRate(0.5);
    speakWord(shuffledOptions);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const item5 = progress;
  const screenName = "number";
  useEffect(() => {
    if (progress > 9) {
      Tts.stop();
      dispatch(setCompletedWriting({ item5, screenName }));
      navigation.navigate("dashboared");
    }
  });
  return (
    <View>
      <Header
        navigation={goBack}
        title={title}
        backgroundColor={backgroundColor}
      />

      <View style={styles.lengthProgress}>
        <Text style={[styles.textProgress, { color: "#e6584c" }]}>
          {progress}/10
        </Text>
        <Bar
          progress={progress / 10}
          width={wp(75)} // Example width using wp for responsive width
          height={hp(5)} // Example height using hp for responsive height
          color="#e6584c" // Example color
          unfilledColor="#ffdbd8"
          borderRadius={15}
          style={{ marginVertical: 15 }}
        />
      </View>
      <View
        style={{
          width: wp(80),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.volumeIcon, { backgroundColor: "#e6584c" }]}
          onPress={handleVolumeIconPress}
        >
          <Feather name="volume-2" color={"#fff"} size={50} />
        </TouchableOpacity>
        <View style={styles.option}>
          {spokenWord && (
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 40 }}>
              {spokenWord?.name}
            </Text>
          )}
        </View>
      </View>

      <View style={[styles.textBox]}>
        {spokenWord &&
          spokenWord.title.split("").map((letter, index) => (
            <View
              key={index}
              style={[styles.individualBox, { borderColor: borderColor }]}
            >
              <Text style={styles.textSelected}>
                {selectedWord !== spokenWord?.title ? selectedWord[index] : ""}
              </Text>
            </View>
          ))}
      </View>
      <View
        style={[
          styles.mcqs,
          {
            marginTop: hp(2),
          },
        ]}
      >
        {shuffledOptions.map((option, index) => (
          <View
            key={index}
            style={[
              styles.optionView,
              {
                width: wp(90),
                // margin: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              },
              selectedOption === option && {
                borderColor: option === spokenWord ? "" : "red",
              },
            ]}
            // onPress={() => handleOptionSelect(option)}
            // disabled={!spokenWord}
          >
            {shuffledLetters.map((letter, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.spellingBox,
                  { borderColor: "#c5473d", backgroundColor: "#e9594d" },
                ]}
                onPress={() => handleOptionSelect(letter, index)}
                // disabled={!spokenWord} // Disable selection if no spoken word
              >
                <Text style={{ color: "#fff", fontSize: 20, padding: 10 }}>
                  {letter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spellingBox: {
    width: wp(15),
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#e9594d",
    borderColor: "#c5473d",
    margin: 5,
    borderWidth: 4,
    borderRadius: 10,
  },
  optionBImage: {
    width: 50,
    height: 50,
    padding: 20,
  },
  optionsImage: {
    width: 60,
    height: 60,
    padding: 30,
  },
  optionBView: {
    width: wp(35),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 4,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
    padding: 20,
  },
  optionBText: {
    color: "green",
    fontSize: 25,
    paddingVertical: 12,
  },
  optionSelectionView: {
    width: wp(30),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderWidth: 4,
    borderColor: "#78290F",
    borderRadius: 10,
    margin: 10,
  },
  optionSelectionViewMatching: {
    width: wp(40),
    height: hp(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderWidth: 4,
    borderColor: "#78290F",
    borderRadius: 10,
    margin: 5,
  },
  optionSelectionText: {
    color: "#fff",
    fontSize: 20,
  },
  //   textBox: {
  //     alignItems: "center",
  //     justifyContent: "center",
  //     alignSelf: "center",
  //     marginVertical: 10,
  //     borderWidth: 4,
  //     borderColor: "#ccc",
  //     backgroundColor: "#fff",
  //     elevation: 2,
  //     borderRadius: 15,
  //   },
  textBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    flexWrap: "wrap",
  },
  individualBox: {
    width: wp(10),
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderWidth: 2,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 15,
  },

  textSelected: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    padding: 4,
  },
  optionTexts: {
    fontSize: 30,
    padding: 4,
  },
  optionView: {
    width: wp(15),
    padding: 2,
    // borderWidth: 4,
    // borderColor: "#78290F",
    // backgroundColor: "#BA5624",
    marginVertical: 9,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    // width: wp(25),
    padding: 10,
    borderWidth: 4,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: wp(100),
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  length: {
    width: wp(90),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6495ED",
  },

  //listening style,

  lengthProgress: {
    width: wp(90),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  textProgress: {
    fontSize: 16,
    color: "#41cf57",
  },
  textProgressPink: {
    fontSize: 16,
    color: "#fb5fda",
  },
  volumeIcon: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: wp(10),
    borderRadius: 90,
    alignSelf: "center",
    padding: 22,
  },
  mcqs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  option: {
    width: wp(40),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    padding: 30,
    borderRadius: 15,
    borderColor: "#ccc",
    margin: 5,
    backgroundColor: "#fff",
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  optionText: {
    fontSize: 50,
    padding: 10,
  },
  modalView: {
    width: wp(50),
    backgroundColor: "#fff",
  },
  okView: {
    width: wp(20),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  okText: {
    fontSize: 20,
    color: "#000",
    padding: 10,
  },
  spokenWordText: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
  },
});