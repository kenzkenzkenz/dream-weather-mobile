import { Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', margin: 0, backgroundColor: 'white' }}>
      <Title />
      <HomeScreen />
      <Footer />
    </View>
  );
}