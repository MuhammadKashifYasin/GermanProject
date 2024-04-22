import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, TextInput } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Bar } from 'react-native-progress';

export const HomeHeader = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userDetailModalVisible, setUserDetailModalVisible] = useState(false);


  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const openUserDetailModal = () => {
    setUserDetailModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigation}
      >
        <AntDesign name="left" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.user}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ alignItems: 'center', marginRight: wp(3) }}>
          <Image source={require('../assets/headerImages/logo.png')} />
        </TouchableOpacity>
        <View>
          <Text style={{ color: '#fff' }}>USER</Text>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign style={styles.iconStyle} name="star" size={30} color="#f99700" />
            <Text style={{ color: '#fff', marginRight: 10 }}>0</Text>
            <Ionicons style={styles.iconStyle} name="diamond-outline" size={30} color="#f154a5" />
            <Text style={{ color: '#fff' }}>0</Text>
          </View>
        </View>
      </View>

      <View>
        <FontAwesome5 name="coins" size={30} color="#f99700" />
        <Text style={{ color: '#fff', textAlign: 'center' }}>0</Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <AntDesign name="close" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.userDetail}>
              <TouchableOpacity onPress={openUserDetailModal} style={styles.userStyle}>
                <Image source={require('../assets/headerImages/logo.png')} />
                <Text style={styles.userName}>USER</Text>
              </TouchableOpacity>
              <Octicons style={styles.pencilStyle} name="pencil" size={30} color="#000" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Bar
                progress={1}
                width={wp(45)}
                height={hp(5)}
                color="#d3d3d2"
                borderRadius={10}
                style={{ marginVertical: 10 }}
              />
              <Image style={styles.applogoStyle} source={require('../assets/headerImages/applogo.jpg')} />
              <Text style={styles.barText}>0%</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Bar
                progress={1}
                width={wp(40)}
                height={hp(5)}
                color="#f5d742"
                borderRadius={10}
                style={{ marginVertical: 10 }}
              />
              <AntDesign style={styles.ratingIcon} name="star" size={40} color="#f99700" />
              <Text style={styles.barText}>0/108</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: hp(3) }}>
              <Bar
                progress={1}
                width={wp(40)}
                height={hp(5)}
                color="#f5a4ea"
                borderRadius={10}
                style={{ marginVertical: 10 }}
              />
              <Ionicons style={styles.ratingIcon} name="diamond-outline" size={40} color="#f154a5" />
              <Text style={styles.barText}>0/36</Text>
            </View>
            <View style={styles.prize}>
              <Text style={styles.level1Text}>LEVEL 1</Text>
              <MaterialCommunityIcons style={styles.ratingIcon} name="trophy" size={70} color="#fcc48f" />
              <Ionicons style={styles.ratingIcon} name="diamond-outline" size={70} color="#fcc48f" />
            </View>
            <View style={styles.prize}>
              <Text style={styles.level2Text}>LEVEL 2</Text>
              <MaterialCommunityIcons style={styles.ratingIcon} name="trophy" size={70} color="#aaaaaa" />
              <Ionicons style={styles.ratingIcon} name="diamond-outline" size={70} color="#aaaaaa" />
            </View>
            <View style={styles.prize}>
              <Text style={styles.level3Text}>LEVEL 3</Text>
              <MaterialCommunityIcons style={styles.ratingIcon} name="trophy" size={70} color="#f4d03f" />
              <Ionicons style={styles.ratingIcon} name="diamond-outline" size={70} color="#f4d03f" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <FontAwesome5 style={styles.footerIcon} name="coins" size={30} color="#f99700" />
              <Text style={styles.footerText}>0</Text>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={userDetailModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.usersData}>
              <Image source={require('../assets/headerImages/logo.png')} />
              <View>
                <TextInput
                  placeholder="USER"
                  placeholderTextColor="#000"
                  style={styles.inputFeild}
                />
                <Text>Max 15</Text>
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
    flexDirection: 'row',
    backgroundColor: '#1a73e8',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(2)
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconStyle: {
    marginRight: wp(1),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: wp(90),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: -15,
    left: -15,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  userDetail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  userStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(75),
    justifyContent: 'center'

  },
  userName: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp(3),
    fontWeight: '600',
    color: '#000'
  },
  pencilStyle: {
    justifyContent: 'center',
  },
  applogoStyle: {
    width: wp(25),
    height: hp(10),
    backgroundColor: '#fff'
  },
  barText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: hp(2)
  },
  ratingIcon: {
    marginHorizontal: wp(4)
  },
  prize: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(2)
  },
  level1Text: {
    fontSize: hp(2),
    color: '#ee8351',
    fontWeight: 'bold'
  },
  level2Text: {
    fontSize: hp(2),
    color: '#636160',
    fontWeight: 'bold'
  },
  level3Text: {
    fontSize: hp(2),
    color: '#e67e22',
    fontWeight: 'bold'
  },
  footerIcon: {
    marginRight: wp(2)
  },
  footerText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  inputFeild: {
    borderWidth: wp(0.5),
    borderColor: '#f00',
    width: wp(15),
    height: hp(5),
    textAlign: 'center',
    fontWeight: '600',
    color: '#000'
  },
  usersData:{
    flexDirection:'row',
    width: wp(75),
  }
});