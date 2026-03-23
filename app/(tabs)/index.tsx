import { View, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '../screens/HomeScreen';
import Title from '@/components/Title';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.outer}>
        <StatusBar style="dark" backgroundColor="#f7fbff" translucent={false} />

        <SafeAreaView style={styles.container}>
          <Title />
          <HomeScreen />
          <Footer />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#f7fbff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
  },
});