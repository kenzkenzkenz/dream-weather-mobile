import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Preferences } from '@/types';

type Props = {
    title: string;
    onPress: (values: Preferences) => void;
    values: Preferences;
};

export default function CustomButton({ title, onPress, values }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(values)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#b6b6b6',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 0,
        borderColor: 'black',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
});