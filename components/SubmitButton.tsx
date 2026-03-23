import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Preferences } from '@/types';

type Props = {
    title: string;
    onPress: (values: Preferences) => void;
    values: Preferences;
    disabled?: boolean;
};

export default function SubmitButton({ title, onPress, values, disabled }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(values)} disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f7fbff',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        marginTop: 20,
        minWidth: 160,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500'
    },
});