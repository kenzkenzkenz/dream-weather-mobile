import { View, Text, StyleSheet } from 'react-native';
import { MatchResponse } from '@/types';
import { WebView } from 'react-native-webview';

type Props = {
    match: MatchResponse | null;
};

export default function ResultScreen({ match }: Props) {
    if (!match) return null;
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>{match?.data?.title}</Text>

                <Text style={styles.description}>Current Conditions: {match?.data?.forecast.shortForecast}, {match?.data?.forecast.temperature}° F</Text>

                <Text style={styles.description}>{match?.data?.description}</Text>
            </View>

            <View style={{ width: '100%', height: 185, marginVertical: 20, borderColor: '#ffffff', borderWidth: 1 }}>
                <WebView
                    source={{ uri: (match?.data?.stream_url || '') }}
                    style={{ flex: 1 }}
                    javaScriptEnabled
                    domStorageEnabled
                    allowsFullscreenVideo
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction={false}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        marginTop: 10,
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: '500',
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 10,
    }
})