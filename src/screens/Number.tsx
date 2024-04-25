import React from "react";
import { Text, View } from "react-native";
import {
  Listening,
  Memory,
  Reading,
  Vocabulary,
  Writing,
} from "../components/numbersComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Numbers = ({ route, navigation }) => {
  // console.log("route", route);
  const { component } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor="#6495ED"
            title={"ZAHLEN"}
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor="#41cf57"
            title={"ZAHLEN"}
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor="#fb63dc"
            title={"ZAHLEN"}
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor="#fd7e14"
            title={"ZAHLEN"}
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor="#e6584c"
            title={"ZAHLEN"}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};
export default Numbers;
