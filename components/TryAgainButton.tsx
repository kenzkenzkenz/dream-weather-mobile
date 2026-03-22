import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress: (values: any) => void;
};

export default function TryAgainButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(null)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f7fbff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        alignItems: 'center',
        width: 150,
        height: 50,
        alignSelf: 'center',
        marginBottom: 20,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500'
    },
});