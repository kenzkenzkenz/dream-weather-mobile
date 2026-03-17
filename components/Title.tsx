import { View, Text, Button, Image } from 'react-native';

export default function Title() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image 
                source={require('../assets/images/logo.png')}
                style={{ width: 100, height: 100, marginBottom: 20 }}
            />
            <Text
                style={{ fontSize: 24, fontWeight: '400' }}
            >Dream Weather Mobile</Text>
        </View>
    )
}