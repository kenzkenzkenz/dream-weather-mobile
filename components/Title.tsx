import { View, Text, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import CreditsModal from './CreditsModal';
import { useState } from 'react';

export default function Title() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 50, marginBottom: 10, marginRight: 20, marginLeft: 20 }}>
            <Image
                source={require('../assets/images/logo.png')}
                style={{ width: 70, height: 70, marginRight: 20 }}
            />
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dream Weather</Text>
                <Text style={{ fontStyle: 'italic', fontSize: 16 }}> Mobile</Text>
            </View>
            <View>
                <Ionicons
                    name="information-circle-outline"
                    size={28}
                    color="black"
                    style={{ marginLeft: 50 }}
                    onPress={() => setModalVisible(true)} />

                <CreditsModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)} />

            </View>

        </View>
    )
}