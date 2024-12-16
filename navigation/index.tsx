import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BackButton } from '../components/BackButton';
import Lab2 from '../screens/Lab2';
import Lab1 from '../screens/Lab1';
import Lab3 from '../screens/Lab3';

export type RootStackParamList = {
  Lab1: undefined;
  Lab2: { name: string };
  Lab3: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lab1">
        <Stack.Screen name="Lab1" component={Lab1} />
        <Stack.Screen
          name="Lab2"
          component={Lab2}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />
        <Stack.Screen
          name="Lab3"
          component={Lab3}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton onPress={navigation.goBack} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
