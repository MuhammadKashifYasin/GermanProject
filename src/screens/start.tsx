import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DEUTSCH</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("dashboared")}
        style={styles.iconView}
      >
        <AntDesign name="play" size={80} color="yellow" />
      </TouchableOpacity>
    </View>
  );
};
export default Start;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
  },
  iconView: {
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "gray",
    padding: 5,
    marginVertical: hp(5),
  },
});
