import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

type LoaderProps = {
  fact: string;
};

export default function Loader({ fact }: LoaderProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      {fact && <Text style={styles.factText}>{fact}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  },
  factText: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});