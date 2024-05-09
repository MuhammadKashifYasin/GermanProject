import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Bar } from "react-native-progress";
import { setImage, setName } from "../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

export const HomeHeader = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userDetailModalVisible, setUserDetailModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
    setUserDetailModalVisible(false);
  };

  const openUserDetailModal = () => {
    setUserDetailModalVisible(true);
  };

  const arr = [
    {
      image: require("../assets/headerImages/image1.jpeg"),
    },
    {
      image: require("../assets/headerImages/image2.jpeg"),
    },
    {
      image: require("../assets/headerImages/image3.jpeg"),
    },
    {
      image: require("../assets/headerImages/image4.png"),
    },
    {
      image: require("../assets/headerImages/image5.jpeg"),
    },
    {
      image: require("../assets/headerImages/image6.jpeg"),
    },
    {
      image: require("../assets/headerImages/image7.jpeg"),
    },
    {
      image: require("../assets/headerImages/image8.jpeg"),
    },
    {
      image: require("../assets/headerImages/image9.jpeg"),
    },
    {
      image: require("../assets/headerImages/image10.jpeg"),
    },
    {
      image: require("../assets/headerImages/image11.png"),
    },
    {
      image: require("../assets/headerImages/image12.jpeg"),
    },
    {
      image: require("../assets/headerImages/image13.jpeg"),
    },
    {
      image: require("../assets/headerImages/image14.jpeg"),
    },
    {
      image: require("../assets/headerImages/image15.jpeg"),
    },
  ];

  // const getImage = (state) => {
  //   state.root.user.image;
  // };
  // const getName = (state) => {
  //   state.root.user.name;
  // };

  // console.log("getNameAndImage", getImage, getName);

  const ProfileImages = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = () => {
      if (onSubmit) {
        onSubmit(text); // Pass the entered text to the parent component only if onSubmit is defined
        setText(""); // Clear the text input after submission
      } // Clear the text input after submission
    };

    return (
      <View>
        <View style={styles.userStyles}>
          <Image
            style={{ width: 50, height: 50 }}
            source={
              selectedImage || require("../assets/headerImages/user3.png")
            }
          />
          <View style={{ marginLeft: wp(3), justifyContent: "center" }}>
            <View style={styles.inputFeild}>
              <TextInput
                placeholder="USER"
                placeholderTextColor="#000"
                maxLength={15}
                value={text}
                onChangeText={(inputText) => setText(inputText)}
                onSubmitEditing={handleSubmit} // Call handleSubmit when the user submits the input
              />
            </View>
            <Text>Max 15</Text>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.okButton}>
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: wp(85),
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {arr.map((item, index) => (
            <TouchableOpacity
              onPress={() => setSelectedImage(item.image)}
              key={index}
              style={{ margin: 20 }}
            >
              <Image
                style={{ width: 50, height: 50, borderRadius: 30 }}
                source={item.image}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const UserDetailComponent = () => {
    return (
      <View>
        <View style={styles.userDetail}>
          <TouchableOpacity
            onPress={openUserDetailModal}
            style={styles.userStyle}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={require("../assets/headerImages/user3.png")}
            />
          </TouchableOpacity>
          <Text style={styles.userName}>{name || "USER"}</Text>
          <Octicons
            style={styles.pencilStyle}
            name="pencil"
            size={30}
            color="#000"
          />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Bar
            progress={1}
            width={wp(45)}
            height={hp(5)}
            color="#d3d3d2"
            borderRadius={10}
            style={{ marginVertical: 10 }}
          />
          <Image
            style={styles.applogoStyle}
            source={require("../assets/headerImages/applogo1.jpg")}
          />
          <Text style={styles.barText}>0%</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Bar
            progress={1}
            width={wp(40)}
            height={hp(5)}
            color="#f5d742"
            borderRadius={10}
            style={{ marginVertical: 10 }}
          />
          <AntDesign
            style={styles.ratingIcon}
            name="star"
            size={40}
            color="#f99700"
          />
          <Text style={styles.barText}>0/108</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: hp(3),
          }}
        >
          <Bar
            progress={1}
            width={wp(40)}
            height={hp(5)}
            color="#f5a4ea"
            borderRadius={10}
            style={{ marginVertical: 10 }}
          />
          <Ionicons
            style={styles.ratingIcon}
            name="diamond-outline"
            size={40}
            color="#f154a5"
          />
          <Text style={styles.barText}>0/36</Text>
        </View>
        <View style={styles.prize}>
          <Text style={styles.level1Text}>LEVEL 1</Text>
          <MaterialCommunityIcons
            style={styles.ratingIcon}
            name="trophy"
            size={70}
            color="#fcc48f"
          />
          <Ionicons
            style={styles.ratingIcon}
            name="diamond-outline"
            size={70}
            color="#fcc48f"
          />
        </View>
        <View style={styles.prize}>
          <Text style={styles.level2Text}>LEVEL 2</Text>
          <MaterialCommunityIcons
            style={styles.ratingIcon}
            name="trophy"
            size={70}
            color="#aaaaaa"
          />
          <Ionicons
            style={styles.ratingIcon}
            name="diamond-outline"
            size={70}
            color="#aaaaaa"
          />
        </View>
        <View style={styles.prize}>
          <Text style={styles.level3Text}>LEVEL 3</Text>
          <MaterialCommunityIcons
            style={styles.ratingIcon}
            name="trophy"
            size={70}
            color="#f4d03f"
          />
          <Ionicons
            style={styles.ratingIcon}
            name="diamond-outline"
            size={70}
            color="#f4d03f"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <FontAwesome5
            style={styles.footerIcon}
            name="coins"
            size={30}
            color="#f99700"
          />
          <Text style={styles.footerText}>0</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation}>
        <AntDesign name="left" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.user}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{ alignItems: "center", marginRight: wp(3) }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("../assets/headerImages/user3.png")}
          />
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#fff" }}>USER</Text>
          <View style={{ flexDirection: "row" }}>
            <AntDesign
              style={styles.iconStyle}
              name="star"
              size={30}
              color="#f99700"
            />
            <Text style={{ color: "#fff", marginRight: 10 }}>0</Text>
            <Ionicons
              style={styles.iconStyle}
              name="diamond-outline"
              size={30}
              color="#f154a5"
            />
            <Text style={{ color: "#fff" }}>0</Text>
          </View>
        </View>
      </View>

      <View>
        <FontAwesome5 name="coins" size={30} color="#f99700" />
        <Text style={{ color: "#fff", textAlign: "center" }}>0</Text>
      </View>
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

            {userDetailModalVisible ? (
              <ProfileImages
                onOKPress={(image) => {
                  setSelectedImage(image); // Set selected image to state
                  setUserDetailModalVisible(false);
                }}
              />
            ) : (
              <UserDetailComponent />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  okButton: {
    width: 50,
    height: 50,
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    elevation: 4,
  },
  okText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#1a73e8",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginRight: wp(1),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: wp(90),
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
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
  userDetail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(75),
    justifyContent: "center",
  },
  userName: {
    // justifyContent: "center",
    // alignItems: "center",
    // marginLeft: wp(3),
    fontWeight: "600",
    color: "#000",
  },
  pencilStyle: {
    justifyContent: "center",
  },
  applogoStyle: {
    width: wp(25),
    height: hp(10),
    backgroundColor: "#fff",
  },
  barText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: hp(2),
  },
  ratingIcon: {
    marginHorizontal: wp(4),
  },
  prize: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
  },
  level1Text: {
    fontSize: hp(2),
    color: "#ee8351",
    fontWeight: "bold",
  },
  level2Text: {
    fontSize: hp(2),
    color: "#636160",
    fontWeight: "bold",
  },
  level3Text: {
    fontSize: hp(2),
    color: "#e67e22",
    fontWeight: "bold",
  },
  footerIcon: {
    marginRight: wp(2),
  },
  footerText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  inputFeild: {
    borderWidth: wp(0.5),
    borderColor: "#000",
    color: "#000",
  },
  usersData: {
    flexDirection: "row",
    justifyContent: "center",
  },
  userStyles: {
    flexDirection: "row",
    // width: wp(60),
    justifyContent: "space-evenly",
  },
  userImageStyle: {
    width: wp(20),
    height: hp(10),
  },
  closeUserButton: {
    position: "relative",
    zIndex: 1,
    top: 20,
    right: 180,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  userOk: {
    width: wp(16),
    height: hp(6),
  },
  userContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logoStyles: {
    margin: 20,
    width: wp(16),
    height: hp(8),
  },
});
