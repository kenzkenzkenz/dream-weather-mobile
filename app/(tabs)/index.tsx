import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 0, backgroundColor: 'white' }}>
      <HomeScreen/>
    </View>
  );
}