import React from "react";
import { Text, View } from "react-native";
import {
  Vocabulary,
  Listening,
  Reading,
  Memory,
  Writing,
} from "../components/petsComponent";

const Pets = ({ route, navigation }) => {
  const { component } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor={"#6495ED"}
            title={"HAUSTIERE"}
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor={"#41cf57"}
            title={"HAUSTIERE"}
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor={"#fb63dc"}
            title={"HAUSTIERE"}
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor={"#e98f00"}
            title={"HAUSTIERE"}
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor={"#e6584c"}
            title={"HAUSTIERE"}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};
export default Pets;
