import { View, Text, Button, Image } from 'react-native';
import { MatchResponse } from '@/types';

type Props = {
    match: MatchResponse | null;
}

export default function ResultScreen({ match }: Props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '500', margin: 10 }}>{match?.data?.title}</Text>
            <Text style={{ margin: 10 }}>Current Conditions: {match?.data?.forecast.shortForecast}, {match?.data?.forecast.temperature}° F</Text>
            <Text style={{ margin: 10 }}>{match?.data?.description}</Text>
            
        </View>
    )
}