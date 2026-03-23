import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PartlyCloudyIcon({ size = 40 }) {
    return (
        <View style={{ width: size, height: size }}>
            {/* Sun (behind) */}
            <Ionicons
                name="sunny"
                size={size}
                color="#facc15"
                style={{
                    position: 'absolute',
                    top: -6,
                    right: -8,
                }}
            />

            {/* Cloud (front) */}
            <Ionicons
                name="cloud"
                size={size}
                color="#ffffff"
                style={{
                    position: 'absolute',
                    bottom: -5,
                    left: -5,
                }}
            />
        </View>
    );
}