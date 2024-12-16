import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { User, Phone, Mail } from 'react-native-feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/z5905263783148_28715bd090ef480e01b91c135960c289.jpg')}
        style={styles.avatar}
      />
      
      <Text style={styles.name}>Trần Lê Vũ</Text>
      <Text style={styles.title}>Software Developer</Text>
      
      <View style={styles.infoContainer}>
        <Phone color="gray" width={20} height={20} />
        <Text style={styles.infoText}>+84 906472426</Text>
      </View>
      <View style={styles.infoContainer}>
        <Mail color="gray" width={20} height={20} />
        <Text style={styles.infoText}>levu1962004@gmail.com</Text>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    resizeMode:"contain"
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: '#777',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#555',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
