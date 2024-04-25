import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Header } from "../components/header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Progress from "react-native-progress";
import {
  Vocabulary,
  Listening,
  Reading,
  Memory,
  Writing,
} from "../components/alphabetComponent";

const Alphabet = ({ route, navigation }: any) => {
  console.log("route", route);
  const { component } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor="#6495ED"
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor="#41cf57"
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor="#fb63dc"
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor="#e98f00"
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor="#e6584c"
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, marginBottom: hp(8) }}>{renderComponent()}</View>
  );
};
export default Alphabet;
