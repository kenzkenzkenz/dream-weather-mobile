import { View, Text, Image } from 'react-native';

export default function Title() {
    return (
        <View>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{ width: 80, height: 80, marginRight: 10 }}
                />
                <View>
                    <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Dream Weather</Text>
                    <Text style={{ fontStyle: 'italic', fontSize: 16 }}> Mobile</Text>
                </View>
            </View>
        </View>
    )
}