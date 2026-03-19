import { View, Text } from 'react-native';
import { MatchResponse } from '@/types';
import { WebView } from 'react-native-webview';

type Props = {
    match: MatchResponse | null;
};

export default function ResultScreen({ match }: Props) {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: '500', margin: 10 }}>{match?.data?.title}</Text>

            <Text style={{ margin: 10 }}>Current Conditions: {match?.data?.forecast.shortForecast}, {match?.data?.forecast.temperature}° F</Text>

            <Text style={{ margin: 10 }}>{match?.data?.description}</Text>

            <View style={{ width: '100%', height: 165, marginVertical: 10, borderColor: '#ffffff', borderWidth: 1 }}>
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