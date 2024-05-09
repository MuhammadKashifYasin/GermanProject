import React from "react";
import { Text, View } from "react-native";
import { Vocabulary } from "../components/monthComponent";

const MonthAndSeasons = ({ route, navigation }) => {
  const { component, Listening, Reading, Memory, Writing } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor={"#6495ED"}
            title={"MONATE UND JAHRESZEITEN"}
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor={"#41cf57"}
            title={"MONATE UND JAHRESZEITEN"}
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor={"#fb63dc"}
            title={"MONATE UND JAHRESZEITEN"}
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor={"#e98f00"}
            title={"MONATE UND JAHRESZEITEN"}
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor={"#e6584c"}
            title={"MONATE UND JAHRESZEITEN"}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};
export default MonthAndSeasons;
