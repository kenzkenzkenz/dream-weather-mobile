import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <View style={styles.headerFooter}>
      <Title />
      <HomeScreen />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  headerFooter: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f7fbff',
  }
});