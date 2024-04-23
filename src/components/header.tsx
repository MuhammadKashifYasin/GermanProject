import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Header = ({ navigation, title, backgroundColor }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: backgroundColor,
      }}
    >
      <TouchableOpacity
        onPress={navigation}
        style={{
          width: wp(20),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="left" size={30} color="#fff" />
      </TouchableOpacity>
      <View
        style={{
          width: wp(60),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            padding: 10,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};
