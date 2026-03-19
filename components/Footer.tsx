import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

type FooterLink = {
  label: string;
  url: string;
};

const links: FooterLink[] = [
  { label: 'OpenWebcamDB', url: 'https://openwebcamdb.com' },
  { label: 'Cohere', url: 'https://cohere.ai' },
  { label: 'NOAA / NWS', url: 'https://www.weather.gov' },
  { label: 'Mackenzie Allen', url: 'https://github.com/kenzkenzkenz' },
  { label: 'View source code on GitHub', url: 'https://github.com/kenzkenzkenz/dream-weather-mobile' },
];

export default function Footer() {
  const openURL = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Webcam data provided by{' '}
        <Text style={styles.link} onPress={() => openURL(links[0].url)}>
          {links[0].label}
        </Text>.
      </Text>

      <Text style={styles.text}>
        Fun weather facts provided by{' '}
        <Text style={styles.link} onPress={() => openURL(links[1].url)}>
          {links[1].label}
        </Text>.
      </Text>

      <Text style={styles.text}>
        Weather data provided by{' '}
        <Text style={styles.link} onPress={() => openURL(links[2].url)}>
          {links[2].label}
        </Text>.
      </Text>

      <Text style={styles.text}>
        App developed by{' '}
        <Text style={styles.link} onPress={() => openURL(links[3].url)}>
          {links[3].label}
        </Text>.
      </Text>

      <Text style={styles.text}>
        <Text style={styles.link} onPress={() => openURL(links[4].url)}>
          {links[4].label}
        </Text>.
      </Text>

      <Text style={styles.footer}>Dream Weather (US Edition)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 12,
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  footer: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});