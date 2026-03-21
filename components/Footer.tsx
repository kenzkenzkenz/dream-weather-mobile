import { View, Text, Linking, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.line}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://openwebcamdb.com')}>
          Webcam data powered by OpenWebcamDB
        </Text>
      </Text>

      <Text style={styles.line}>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.weather.gov')}>
          Weather data from NWS/NOAA
        </Text>
        {' | '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://cohere.ai')}>
          AI features powered by Cohere
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  line: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 2,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});