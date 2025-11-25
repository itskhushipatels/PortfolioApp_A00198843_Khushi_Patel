import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function ContactScreen() {
  
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Me</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => openLink("https://www.linkedin.com/in/khushi-patel-0a913a216/")}
        >
          <Text style={styles.text}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => openLink("https://github.com/itskhushipatels")}
        >
          <Text style={styles.text}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.box, { marginTop: 20, width: 200 }]}
        onPress={() => openLink("mailto:khushiptl1762003@gmail.com")}
      >
        <Text style={styles.text}>Email Me</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  box: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
