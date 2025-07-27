import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation'; // adjust path

type SecondScreenProps = NativeStackScreenProps<RootStackParamList, 'Second'>;

const SecondScreen: React.FC<SecondScreenProps> = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Button
            title="Go to ViewPager Screen"
            onPress={() => navigation.navigate('ViewPager')} />
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
