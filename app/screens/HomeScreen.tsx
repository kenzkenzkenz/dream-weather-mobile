import { View, Text, Button, Image } from 'react-native';
import Title from '@/components/Title';

export default function HomeScreen() {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 100 }}>
            <Title/>
            <View style={{ margin: 20 }}>
                <Text>Tell us what vibe you want, and we'll send you to the perfect US location.</Text>
            </View>
        </View>
    )
}