import { View, Text, Image } from 'react-native';

export default function Title() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 100, height: 100, marginBottom: 20 }}
            />
            <View>
                <Text
                    style={{ fontSize: 24, fontWeight: 'bold' }}
                >Dream Weather</Text>
                <Text style={{ fontStyle: 'italic', fontSize: 16 }}>Mobile</Text>
            </View>
        </View>
    )
}