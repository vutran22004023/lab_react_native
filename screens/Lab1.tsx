import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenContent } from 'components/ScreenContent';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Lab2'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <ScreenContent path="screens/Lab1.tsx" title="Lab 1 tạo project">
      <Text>Khởi tạo dự án</Text>
      </ScreenContent>
      <Button style={{marginBottom: 10}} onPress={() => navigation.navigate('Lab2', { name: 'YourName' })} title="Show Lab2" />
      <Button onPress={() => navigation.navigate('Lab3', { name: 'YourName' })} title="Show Lab3" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
