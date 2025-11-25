import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const projects = [
  {
    id: 1,
    title: "GroSync",
    description: "A real-time shared grocery list app that syncs with your family and prevents duplicate purchases.",
  },
  {
    id: 2,
    title: "HealthySnake",
    description: "A modern Snake-style game built using Unreal Engine with a focus on healthy interaction and fun gameplay.",
  },
  {
    id: 3,
    title: "FairShare",
    description: "A trustworthy bill-splitting app that lets users attach photos for full transparency.",
  },
];

export default function ProjectsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Projects</Text>

      {projects.map((project) => (
        <View key={project.id} style={styles.card}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#E3F2FD",
    padding: 20,
    borderRadius: 12,
    width: "100%",
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: "#555",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
