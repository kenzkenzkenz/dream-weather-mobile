import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SnowIcon({ size = 40 }) {

    return (
        <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons name="snow" size={size} color="#fff" />

            <View style={dot(-3, 2, 4, size)} />
            <View style={dot(size - 2, 0, 3, size)} />
            <View style={dot(-7, size / 2 - 6, 3, size)} />
            <View style={dot(size + 8, size / 2 - 2, 4, size)} />
            <View style={dot(4, size + 2, 3, size)} />
            <View style={dot(size, size, 3, size)} />
        </View>
    );
}

const dot = (left: number, top: number, sizeDot: number, size: number) => ({
    position: 'absolute' as const,
    left,
    top,
    width: sizeDot,
    height: sizeDot,
    borderRadius: sizeDot / 2,
    backgroundColor: 'white',
    opacity: 0.9,
});