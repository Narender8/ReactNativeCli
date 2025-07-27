import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
      <Text style={{ color: darkMode ? '#fff' : '#000' }}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Button title="Toggle Theme" onPress={() => setDarkMode(!darkMode)} />
    </View>
  );
};

export default DarkModeToggle;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
});
