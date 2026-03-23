import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '../screens/HomeScreen';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#f7fbff" translucent={false} />
      <SafeAreaView style={styles.container}>
        <Title />
        <HomeScreen />
        <Footer />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
  },
});