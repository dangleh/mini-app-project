import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ChildrenHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 30, color: '#FFF' }}>Children</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Post');
        }}
        style={styles.button}
      >
        <Text style={{ fontSize: 18, color: '#FFF' }}>Go to Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChildrenHome;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
