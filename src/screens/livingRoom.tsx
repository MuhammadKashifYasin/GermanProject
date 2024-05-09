import React from "react";
import { Text, View } from "react-native";
import { Vocabulary } from "../components/livingRoomComponent";

const LivingRoom = ({ route, navigation }) => {
  const { component, Listening, Reading, Memory, Writing } = route.params;

  const renderComponent = () => {
    switch (component) {
      case "_Vocabulary":
        return (
          <Vocabulary
            goBack={() => navigation.goBack()}
            backgroundColor={"#6495ED"}
            title={"WOHNZIMMER"}
          />
        );
      case "_Listening":
        return (
          <Listening
            goBack={() => navigation.goBack()}
            backgroundColor={"#41cf57"}
            title={"WOHNZIMMER"}
          />
        );
      case "_Reading":
        return (
          <Reading
            goBack={() => navigation.goBack()}
            backgroundColor={"#fb63dc"}
            title={"WOHNZIMMER"}
          />
        );
      case "_Memory":
        return (
          <Memory
            goBack={() => navigation.goBack()}
            backgroundColor={"#e98f00"}
            title={"WOHNZIMMER"}
          />
        );
      case "_Writing":
        return (
          <Writing
            goBack={() => navigation.goBack()}
            backgroundColor={"#e6584c"}
            title={"WOHNZIMMER"}
          />
        );
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderComponent()}</View>;
};
export default LivingRoom;
