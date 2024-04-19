import React from 'react';
import {Text, View} from 'react-native';

const Technology = ({route}) => {
  const {component} = route.params;

  const renderComponent = () => {
    switch (component) {
      case '_Vocabulary':
        return <_Vocabulary />;
      case '_Listening':
        return <_Listening />;
      case '_Reading':
        return <_Reading />;
      case '_Memory':
        return <_Memory />;
      case '_Writing':
        return <_Writing />;
      default:
        return null;
    }
  };
  const _Vocabulary = () => {
    return (
      <View>
        <Text>_Vocabulary</Text>
      </View>
    );
  };

  const _Listening = () => {
    return (
      <View>
        <Text>_Listening</Text>
      </View>
    );
  };

  const _Reading = () => {
    return (
      <View>
        <Text>sko</Text>
      </View>
    );
  };

  const _Memory = () => {
    return (
      <View>
        <Text>Memory</Text>
      </View>
    );
  };

  const _Writing = () => {
    return (
      <View>
        <Text>_Writing</Text>
      </View>
    );
  };

  return <View>{renderComponent()}</View>;
};
export default Technology;
