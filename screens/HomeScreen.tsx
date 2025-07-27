/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  Keyboard,
} from 'react-native';
import { showConfirmationAlert } from '../components/ShowCustomAlert';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation';
import ViewPager from '@react-native-community/viewpager';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  //  const isButtonEnabled = userName.trim.length > 0 && password.trim.length > 0;
  const isButtonEnabled = !userName.trim() || !password.trim() ? false : true;

  const handlePress = () => {
    navigation.navigate('Second', { name: userName });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.inputfield}
        placeholder="Enter UserName"
        placeholderTextColor="#999"
        value={userName}
        onChangeText={setUserName}
      ></TextInput>
      <TextInput
        style={styles.inputPassword}
        placeholder="Enter Password"
        placeholderTextColor="#999"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity
        style={[styles.button, !isButtonEnabled && styles.buttonDisabled]}
        activeOpacity={0.6}
        disabled={!isButtonEnabled}
        onPress={() => {
          Keyboard.dismiss();
          Alert.alert(
            'Login Info',
            `Username: ${userName}\nPassword: ${password}`,
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('Assignment', undefined);
                  console.log('User clicked OK');
                  // Add your logic here
                },
              },
            ]
          );
        }}
      >
        <Text style={styles.buttonText}>Tap Me</Text>
      </TouchableOpacity>
      <Button
        title="Click Me"
        color="#841584"
        accessibilityLabel="Tap me to show alert"
        disabled={!isButtonEnabled}
        onPress={() => {
          showConfirmationAlert(
            'Are you sure you want to proceed?',
            () => {
              handlePress();
              //              Alert.alert('Confirmed!');
            },
            () => {
              Alert.alert('Cancelled!');
            },
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 70,
    textAlign: 'center',
    fontFamily: 'Courier New',
    color: 'black',
    fontWeight: 'bold',
    marginTop: 100,
  },
  inputfield: {
    height: 50,
    borderColor: 'orange',
    borderWidth: 1,
    margin: 12,
    paddingLeft: 10,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  inputPassword: {
    height: 50,
    borderColor: 'orange',
    borderWidth: 1,
    margin: 12,
    paddingLeft: 10,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    height: 50,
    backgroundColor: 'blue',
    marginTop: 20,
    margin: 12,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
});

export default HomeScreen;
