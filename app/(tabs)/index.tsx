import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <SafeAreaView
      style={[
        styles.container,
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f7fbff"
        translucent={false}
      />
      <Title />
      <HomeScreen />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
  },
});