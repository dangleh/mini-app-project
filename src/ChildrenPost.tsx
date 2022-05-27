import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ChildrenPost = () => {
  return (
    <View style={styles.view}>
      <Text style={{ color: '#FFF', fontSize: 30 }}>ChildrenPost</Text>
    </View>
  );
};

export default ChildrenPost;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
});
