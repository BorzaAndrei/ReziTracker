import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Title = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>ReziTracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: '5%',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 35,
    color: 'rgba(83,157,241,1)'
  },
});

export default Title;
