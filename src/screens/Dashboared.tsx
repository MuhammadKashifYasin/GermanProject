import React, { useEffect, useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const Dashboared = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const ArrayImages = [
    {
      image: require("../assets/images/abc.jpeg"),
      name: "ALPHABET",
      screenName: "alphabet",
    },
    {
      image: require("../assets/images/number.jpeg"),
      name: "ZAHLEN",
      screenName: "number",
    },
    {
      image: require("../assets/images/color.jpg"),
      name: "FARBEN",
      screenName: "color",
    },
    {
      image: require("../assets/images/burger.jpeg"),
      name: "ESSEN",
      screenName: "food",
    },
    {
      image: require("../assets/images/tamato.jpeg"),
      name: "GEMÜSE",
      screenName: "vegetable",
    },
    {
      image: require("../assets/images/orange.jpeg"),
      name: "FRÜCHTE",
      screenName: "fruit",
    },
    {
      image: require("../assets/images/icecreame.jpeg"),
      name: "GETRÄNKE UND\n NACHSPEISEN",
      screenName: "drinks",
    },
    {
      image: require("../assets/images/bike.jpeg"),
      name: "TRANSPORT",
      screenName: "transport",
    },
    {
      image: require("../assets/images/verb.jpeg"),
      name: "VERBEN",
      screenName: "verbs",
    },
    {
      image: require("../assets/images/body.jpeg"),
      name: "KÖRPER",
      screenName: "body",
    },
    {
      image: require("../assets/images/tiger.jpeg"),
      name: "WILDTIERE",
      screenName: "wild",
    },
    {
      image: require("../assets/images/animal.jpeg"),
      name: "BAUERNHOFTIERE",
      screenName: "farm",
    },
    {
      image: require("../assets/images/fish.jpeg"),
      name: "MEERESTIERE",
      screenName: "sea",
    },
    {
      image: require("../assets/images/dog.jpeg"),
      name: "HAUSTIERE",
      screenName: "pets",
    },
    {
      image: require("../assets/images/butterfly.jpeg"),
      name: "INSEKTEN",
      screenName: "insects",
    },
    {
      image: require("../assets/images/week.png"),
      name: "WOCHENTAGE",
      screenName: "week",
    },
    {
      image: require("../assets/images/month.jpeg"),
      name: "MONATE UND\n JAHRESZEITEN",
      screenName: "month",
    },
    {
      image: require("../assets/images/shirt.jpeg"),
      name: "KLEIDUNG",
      screenName: "clothing",
    },
    {
      image: require("../assets/images/school.jpeg"),
      name: "SCHULE",
      screenName: "school",
    },
    {
      image: require("../assets/images/gitar.jpeg"),
      name: "MUSIK",
      screenName: "music",
    },
    {
      image: require("../assets/images/sun.jpeg"),
      name: "WETTER",
      screenName: "weather",
    },
    {
      image: require("../assets/images/city.jpeg"),
      name: "STADT",
      screenName: "city",
    },
    {
      image: require("../assets/images/soffa.jpeg"),
      name: "WOHNZIMMER",
      screenName: "living",
    },
    {
      image: require("../assets/images/bed.jpeg"),
      name: "SCHLAFZIMMER",
      screenName: "bed",
    },
    {
      image: require("../assets/images/paste.jpeg"),
      name: "BADEZIMMER",
      screenName: "bath",
    },
    {
      image: require("../assets/images/spoon.jpeg"),
      name: "KÜCHE",
      screenName: "kitchen",
    },
    {
      image: require("../assets/images/holiday.jpeg"),
      name: "FERIEN",
      screenName: "holiday",
    },
    {
      image: require("../assets/images/sport.jpeg"),
      name: "SPORT",
      screenName: "sport",
    },
    {
      image: require("../assets/images/nature.jpeg"),
      name: "NATUR-\nLANDSCHAFTEN",
      screenName: "nature",
    },
    {
      image: require("../assets/images/angle.jpeg"),
      name: "FORMEN",
      screenName: "toform",
    },
    {
      image: require("../assets/images/arrow.jpeg"),
      name: "GEGENTEILE",
      screenName: "opposite",
    },
    {
      image: require("../assets/images/laptop.jpeg"),
      name: "TECHNOLOGIE",
      screenName: "technology",
    },
    {
      image: require("../assets/images/freezer.jpeg"),
      name: "ELEKTROGERÄTE",
      screenName: "electrical",
    },
    {
      image: require("../assets/images/spaceman.jpeg"),
      name: "RAUMFAHRT",
      screenName: "space",
    },
    {
      image: require("../assets/images/cristmas.png"),
      name: "WEIHNACHTEN",
      screenName: "christmas",
    },
    {
      image: require("../assets/images/halloween.jpg"),
      name: "HALLOWEEN",
      screenName: "halloween",
    },
  ];

  const completedVocabularies = useSelector(
    (state) => state.root.user.completedVocabularies
  );
  console.log("completedVocabularies..........", completedVocabularies);

  const completedListening = useSelector(
    (state) => state.root.user.completedListening
  );
  console.log("completedListening//////..........", completedListening);

  const completedReading = useSelector(
    (state) => state.root.user.completedReading
  );
  console.log("completedReading.....//////..........", completedReading);

  const completedWriting = useSelector(
    (state) => state.root.user.completedWriting
  );
  console.log("completedWriting.....//////..........", completedWriting);

  const completedMemory = useSelector(
    (state) => state.root.user.completedMemory
  );
  console.log("completedWriting.....//////..........", completedMemory);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const navigateToComponent = (screenName, componentName) => {
    closeModal();
    navigation.navigate(screenName, { component: componentName });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          {ArrayImages.map((item, index) => (
            <View style={styles.item} key={index}>
              <TouchableOpacity
                onPress={() => openModal(item)}
                style={styles.itemContainer}
              >
                <Image source={item.image} style={styles.image} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name="star" size={20} color="#ccc" />
                  <AntDesign name="star" size={20} color="#ccc" />
                  <AntDesign name="star" size={20} color="#ccc" />
                </View>
              </TouchableOpacity>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.modalImageContainer}>
              <Image source={selectedItem?.image} style={styles.modalImage} />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="star" size={20} color="#ccc" />
                <AntDesign name="star" size={20} color="#ccc" />
                <AntDesign name="star" size={20} color="#ccc" />
              </View>
            </View>
            <Text style={styles.modalName}>{selectedItem?.name}</Text>
            <TouchableOpacity
              onPress={() =>
                navigateToComponent(
                  selectedItem?.screenName,
                  "_Vocabulary" // Default to Vocabulary, change it if needed
                )
              }
              style={[styles.modalButton, { backgroundColor: "#007bff" }]}
            >
              <FontAwesome5 name="book-reader" size={30} color="#fff" />
              <Text style={styles.buttonText}>Vocabulary</Text>
              {completedVocabularies?.item &&
              completedVocabularies?.screenName === selectedItem?.screenName ? (
                <View style={[styles.checkIcon, { borderColor: "#007bff" }]}>
                  <FontAwesome5 name="check" color={"#007bff"} size={30} />
                </View>
              ) : (
                ""
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigateToComponent(
                  selectedItem?.screenName,
                  "_Listening" // Default to Vocabulary, change it if needed
                )
              }
              style={[styles.modalButton, { backgroundColor: "#28a745" }]}
            >
              <FontAwesome5 name="volume-up" size={30} color="#fff" />
              <Text style={styles.buttonText}>Listening</Text>
              {completedListening?.item2 &&
              completedListening?.screenName === selectedItem?.screenName ? (
                <View style={[styles.checkIcon, { borderColor: "#28a745" }]}>
                  <FontAwesome5 name="check" color={"#28a745"} size={30} />
                </View>
              ) : (
                ""
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigateToComponent(
                  selectedItem?.screenName,
                  "_Reading" // Default to Vocabulary, change it if needed
                )
              }
              style={[styles.modalButton, { backgroundColor: "#FF69B4" }]}
            >
              <FontAwesome name="eye" size={30} color="#fff" />

              <Text style={styles.buttonText}>Reading</Text>
              {completedReading?.item3 &&
              completedReading?.screenName === selectedItem?.screenName ? (
                <View style={[styles.checkIcon, { borderColor: "#FF69B4" }]}>
                  <FontAwesome5 name="check" color={"#FF69B4"} size={30} />
                </View>
              ) : (
                ""
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigateToComponent(
                  selectedItem?.screenName,
                  "_Memory" // Default to Vocabulary, change it if needed
                )
              }
              style={[styles.modalButton, { backgroundColor: "#fd7e14" }]}
            >
              <FontAwesome name="lightbulb-o" size={30} color="#fff" />

              <Text style={styles.buttonText}>Memory</Text>
              {completedMemory?.item4 &&
              completedMemory?.screenName === selectedItem?.screenName ? (
                <View style={[styles.checkIcon, { borderColor: "#fd7e14" }]}>
                  <FontAwesome5 name="check" color={"#fd7e14"} size={30} />
                </View>
              ) : (
                ""
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigateToComponent(
                  selectedItem?.screenName,
                  "_Writing" // Default to Vocabulary, change it if needed
                )
              }
              style={[styles.modalButton, { backgroundColor: "#dc3545" }]}
            >
              <FontAwesome name="pencil" size={30} color="#fff" />

              <Text style={styles.buttonText}>Writing</Text>
              {completedWriting?.item5 &&
              completedWriting?.screenName === selectedItem?.screenName ? (
                <View style={[styles.checkIcon, { borderColor: "#dc3545" }]}>
                  <FontAwesome5 name="check" color={"#dc3545"} size={30} />
                </View>
              ) : (
                ""
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dashboared;

const styles = StyleSheet.create({
  modalImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(30),
    position: "absolute",
    top: -50,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    padding: 10,
  },
  icon: {
    position: "absolute",
    top: -4,
    right: -4,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 10,
  },
  star: {
    fontSize: 20,
    marginBottom: 10,
    color: "#ccc",
  },
  itemContainer: {
    width: wp(30),
    borderColor: "#ccc",
    borderWidth: 3,
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    margin: 15,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: wp(80),
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 90,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginVertical: hp(8),
  },
  modalButton: {
    width: wp(50),
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 4,
    borderColor: "#fff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: -15,
    left: -15,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  checkIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -10,
    top: -10,
    elevation: 5,
    // shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 2,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 3,
  },
});
