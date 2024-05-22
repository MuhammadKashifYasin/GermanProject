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
import { setImage, setName, setStar } from "../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
const dummyImage = require("../assets/headerImages/image1.jpeg");

export const HomeHeader = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userDetailModalVisible, setUserDetailModalVisible] = useState(false);
  // const [starLength, setStarLength] = useState();
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [name, setName] = useState("");

  // const closeModal = () => {
  //   setModalVisible(false);
  //   setSelectedItem(null);
  //   setUserDetailModalVisible(false);
  // };

  // const openUserDetailModal = () => {
  //   setUserDetailModalVisible(true);
  // };

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

  const ProfileImages = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const getUserName = useSelector((state) => state.root.user.name);
    const getUserImage = useSelector((state) => state.root.user.image);

    console.log("getUserName,,,,........", getUserName);
    console.log("getUserImage.......", getUserImage);

    const [text, setText] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    console.log("selectedImage", selectedImage);

    const handleSubmit = () => {
      dispatch(setName(text)); // Dispatch user input name
      dispatch(setImage(selectedImage)); // Dispatch selected image
      setModalVisible(false);
      setText(""); // Clear text after dispatching
      console.log("OK button pressed. Selected image:", selectedImage);
    };

    return (
      <View>
        <View style={[styles.userStyles]}>
          <View
            style={{
              width: wp(20),
              // justifyContent: "center",
              alignItems: "flex-end",
              marginHorizontal: wp(3),
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 25 }}
              source={
                selectedImage || getUserImage
                  ? selectedImage || getUserImage
                  : require("../assets/headerImages/user.png")
              }
            />
          </View>
          <View style={{ width: wp(40) }}>
            <View style={styles.inputFeild}>
              <TextInput
                placeholder={getUserName ? getUserName : "USER"}
                placeholderTextColor="#000"
                maxLength={15}
                value={text}
                onChangeText={(inputText) => setText(inputText)}
              />
            </View>
            <Text>Max 15</Text>
          </View>
          <View
            style={{
              width: wp(20),
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handleSubmit} style={styles.okButton}>
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
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

  // const UserDetailComponent = () => {
  //   const getUserName = useSelector((state) => state.root.user.name);
  //   const getUserImage = useSelector((state) => state.root.user.image);

  //   console.log("getUserName,,,,..///////......", getUserName);
  //   console.log("getUserImage....|||||||||||||...", getUserImage);
  //   return (
  //     <View>
  //       <View style={styles.userDetail}>
  //         <TouchableOpacity
  //           onPress={openUserDetailModal}
  //           style={[
  //             styles.userStyle,
  //             {
  //               width: wp(30),
  //               alignItems: "flex-end",
  //               justifyContent: "flex-end",
  //               marginHorizontal: wp(2),
  //             },
  //           ]}
  //         >
  //           <Image
  //             style={{ width: 50, height: 50, borderRadius: 25 }}
  //             source={
  //               getUserImage
  //                 ? getUserImage
  //                 : require("../assets/headerImages/user3.png")
  //             }
  //           />
  //         </TouchableOpacity>
  //         <View style={{ width: wp(40) }}>
  //           <Text style={[styles.userName, { fontSize: 20 }]}>
  //             {getUserName ? getUserName : "USER"}
  //           </Text>
  //         </View>
  //         <TouchableOpacity
  //           onPress={openUserDetailModal}
  //           style={{
  //             width: wp(10),
  //             alignItems: "center",
  //             justifyContent: "center",
  //           }}
  //         >
  //           <Octicons
  //             style={styles.pencilStyle}
  //             name="pencil"
  //             size={30}
  //             color="#000"
  //           />
  //         </TouchableOpacity>
  //       </View>
  //       <View style={{ flexDirection: "row", alignItems: "center" }}>
  //         <Bar
  //           progress={1}
  //           width={wp(45)}
  //           height={hp(5)}
  //           color="#d3d3d2"
  //           borderRadius={10}
  //           style={{ marginVertical: 10 }}
  //         />
  //         <Image
  //           style={styles.applogoStyle}
  //           source={require("../assets/headerImages/applogo1.jpg")}
  //         />
  //         <Text style={styles.barText}>0%</Text>
  //       </View>
  //       <View style={{ flexDirection: "row", alignItems: "center" }}>
  //         <Bar
  //           progress={1}
  //           width={wp(40)}
  //           height={hp(5)}
  //           color="#f5d742"
  //           borderRadius={10}
  //           style={{ marginVertical: 10 }}
  //         />
  //         <AntDesign
  //           style={styles.ratingIcon}
  //           name="star"
  //           size={40}
  //           color="#f99700"
  //         />
  //         <Text style={styles.barText}>0/108</Text>
  //       </View>
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           alignItems: "center",
  //           marginBottom: hp(3),
  //         }}
  //       >
  //         <Bar
  //           progress={1}
  //           width={wp(40)}
  //           height={hp(5)}
  //           color="#f5a4ea"
  //           borderRadius={10}
  //           style={{ marginVertical: 10 }}
  //         />
  //         <Ionicons
  //           style={styles.ratingIcon}
  //           name="diamond-outline"
  //           size={40}
  //           color="#f154a5"
  //         />
  //         <Text style={styles.barText}>0/36</Text>
  //       </View>
  //       <View style={styles.prize}>
  //         <Text style={styles.level1Text}>LEVEL 1</Text>
  //         <MaterialCommunityIcons
  //           style={styles.ratingIcon}
  //           name="trophy"
  //           size={70}
  //           color="#fcc48f"
  //         />
  //         <Ionicons
  //           style={styles.ratingIcon}
  //           name="diamond-outline"
  //           size={70}
  //           color="#fcc48f"
  //         />
  //       </View>
  //       <View style={styles.prize}>
  //         <Text style={styles.level2Text}>LEVEL 2</Text>
  //         <MaterialCommunityIcons
  //           style={styles.ratingIcon}
  //           name="trophy"
  //           size={70}
  //           color="#aaaaaa"
  //         />
  //         <Ionicons
  //           style={styles.ratingIcon}
  //           name="diamond-outline"
  //           size={70}
  //           color="#aaaaaa"
  //         />
  //       </View>
  //       <View style={styles.prize}>
  //         <Text style={styles.level3Text}>LEVEL 3</Text>
  //         <MaterialCommunityIcons
  //           style={styles.ratingIcon}
  //           name="trophy"
  //           size={70}
  //           color="#f4d03f"
  //         />
  //         <Ionicons
  //           style={styles.ratingIcon}
  //           name="diamond-outline"
  //           size={70}
  //           color="#f4d03f"
  //         />
  //       </View>
  //       <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
  //         <FontAwesome5
  //           style={styles.footerIcon}
  //           name="coins"
  //           size={30}
  //           color="#f99700"
  //         />
  //         <Text style={styles.footerText}>0</Text>
  //       </View>
  //     </View>
  //   );
  // };

  const getUserName = useSelector((state) => state.root.user.name);
  const getUserImage = useSelector((state) => state.root.user.image);
  console.log("getUserImage", getUserImage);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation}>
        <AntDesign name="left" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.user}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            alignItems: "center",
            marginRight: wp(3),
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={
              getUserImage
                ? getUserImage
                : require("../assets/headerImages/user.png")
            }
          />
        </TouchableOpacity>
        <View>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            {getUserName ? getUserName : "USER"}
          </Text>
          {/* <View style={{ flexDirection: "row" }}>
            <AntDesign
              style={styles.iconStyle}
              name="star"
              size={30}
              color="#f99700"
            />
            <Text style={{ color: "#fff", marginRight: 10 }}>{starLength}</Text>
            <Ionicons
              style={styles.iconStyle}
              name="diamond-outline"
              size={30}
              color="#f154a5"
            />
            <Text style={{ color: "#fff" }}>0</Text>
          </View> */}
        </View>
      </View>

      {/* <View>
        <FontAwesome5 name="coins" size={30} color="#f99700" />
        <Text style={{ color: "#fff", textAlign: "center" }}>0</Text>
      </View> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
            <ProfileImages
              onOKPress={(image) => {
                setSelectedImage(image); // Set selected image to state
                setUserDetailModalVisible(false);
              }}
            />
            {/* {userDetailModalVisible ? (
              <ProfileImages
                onOKPress={(image) => {
                  setSelectedImage(image); // Set selected image to state
                  setUserDetailModalVisible(false);
                }}
              />
            ) : (
              <UserDetailComponent />
            )} */}
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
    backgroundColor: "#1a73e8",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#fff",
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
    width: wp(65),
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
    borderWidth: 0.5,
    borderColor: "#000",
    color: "#000",
    backgroundColor: "#ccc",
    opacity: 0.5,
    borderRadius: 20,
    paddingHorizontal: 5,
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
