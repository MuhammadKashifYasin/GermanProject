import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Progress from 'react-native-progress';
import {Vocabulary, Listening, Reading} from '../components/alphabetComponent';

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

const Alphabet = ({route, navigation}: any) => {
  console.log('route', route);
  const {component} = route.params;

  const renderComponent = () => {
    switch (component) {
      case '_Vocabulary':
        return <Vocabulary />;
      case '_Listening':
        return <Listening />;
      case '_Reading':
        return <Reading />;
      case '_Memory':
        return <_Memory />;
      case '_Writing':
        return <_Writing />;
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, marginBottom: hp(8)}}>
      <Header navigation={() => navigation.goBack()} title="Alphabet" />
      {renderComponent()}
    </View>
  );
};
export default Alphabet;
