import { RouteProp, useRoute } from '@react-navigation/native';
import { ScreenContent } from 'components/ScreenContent';

import { RootStackParamList } from '../navigation';
import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Lab2'>;

export default function Details() {
  const router = useRoute<DetailsScreenRouteProp>();
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
  ]);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems((prevItems) => [...prevItems, { id: Math.random().toString(), name: inputValue }]);
      setInputValue('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.header}>React Native Demo</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button title="Add Item" onPress={handleAddItem} />

        <ScrollView style={styles.scrollView}>
          <Text style={styles.sectionTitle}>Scrollable Content</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula justo sit amet
            nulla vehicula, vel dapibus libero scelerisque. Donec tincidunt nisi sed felis pulvinar
            fermentum.
          </Text>
          <Text>
            Sed viverra, augue eget venenatis vehicula, lacus magna pharetra ex, ut pharetra justo
            lacus at elit. Maecenas lacinia metus nec nunc viverra cursus.
          </Text>
        </ScrollView>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.name}</Text>}
          style={styles.list}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginVertical: 16,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  list: {
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 8,
  },
  listItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
