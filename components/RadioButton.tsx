import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    label: string;
    value: string;
    selected: string;
    onSelect: (value: string) => void;
};

export default function RadioButton({ label, value, selected, onSelect }: Props) {
    const isSelected = selected === value;

    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect(value)}>
            <View style={[styles.circle, isSelected && styles.filledCircle]} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', marginRight: 20 },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 8,
    },
    filledCircle: {
        backgroundColor: 'black',
    },
    label: {
        fontSize: 16,
        color: 'black',
    },
});