import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CloseButton({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});