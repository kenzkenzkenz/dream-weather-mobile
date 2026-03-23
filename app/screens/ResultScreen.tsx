import { View, Text, StyleSheet } from 'react-native';
import { MatchResponse } from '@/types';
import { WebView } from 'react-native-webview';

type Props = {
    match: MatchResponse | null;
};

export default function ResultScreen({ match }: Props) {
    if (!match) return null;

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>
                <Text style={styles.title}>{match?.data?.title}</Text>

                <Text style={styles.description}>
                    Current Conditions: {match?.data?.forecast.shortForecast}, {match?.data?.forecast.temperature}° F
                </Text>

                <Text style={styles.description}>
                    {match?.data?.description}
                </Text>
            </View>

            <View style={styles.videoContainer}>
                <WebView
                    source={{ uri: match?.data?.stream_url || '' }}
                    style={{ flex: 1 }}
                    javaScriptEnabled
                    domStorageEnabled
                    allowsFullscreenVideo
                    allowsInlineMediaPlayback
                    mediaPlaybackRequiresUserAction={false}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 20,
        margin: 4,
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
    },

    videoContainer: {
        width: '100%',
        aspectRatio: 16 / 9,
        marginVertical: 20,
        borderColor: '#ffffff',
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 12,
    },
});