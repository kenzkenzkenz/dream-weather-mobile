import { View, Text } from 'react-native';
import Title from '@/components/Title';
import PreferenceForm from '@/components/PreferenceForm';

export default function HomeScreen() {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 20 }}>
            <Title />
            <View style={{ margin: 20 }}>
                <Text>Tell us what vibe you want, and we'll send you to the perfect U.S. location.</Text>
                <PreferenceForm />
            </View>
        </View>
    )
}