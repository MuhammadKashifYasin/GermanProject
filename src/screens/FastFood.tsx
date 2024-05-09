import React from "react";
import { Text, View } from "react-native";
import {
  Listening,
  Memory,
  Reading,
  Vocabulary,
  Writing,
} from "../components/fastFoodComponent";

const FastFood = ({ route, navigation }) => {
  const { component } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor={"#6495ED"}
            title={"ESSEN"}
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor={"#41cf57"}
            title={"ESSEN"}
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor={"#fb63dc"}
            title={"ESSEN"}
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor={"#e98f00"}
            title={"ESSEN"}
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor={"#e6584c"}
            title={"ESSEN"}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};
export default FastFood;
