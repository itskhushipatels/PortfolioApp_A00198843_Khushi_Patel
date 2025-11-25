// Home Screen - Shows profile, intro, and navigation buttons.

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.jpg')}
        style={styles.profile}
      />

      <Text style={styles.name}>Khushi Patel</Text>

      <Text style={styles.bio}>
        “I am a Mobile Application Development student passionate about building innovative and user-centered digital experiences. My background in Cyber Security allows me to approach development with a strong emphasis on safety and secure design. I also hold a Bachelor’s in Computer Application Development, giving me a well-rounded understanding of software engineering.”
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Projects')}
      >
        <Text style={styles.buttonText}>View My Projects</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4CAF50' }]}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Contact Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  bio: {
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
