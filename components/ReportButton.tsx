import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
    title: string;
    onPress: (values: any) => void;
};

export default function ReportButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(null)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'lightgray',
        alignItems: 'center',
        marginTop: 10,
        width: 100,
        alignSelf: 'center',
        marginLeft: 10,
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400'
    },
});