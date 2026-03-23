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
        backgroundColor: '#f7fbff',
        borderRadius: 8,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'lightgray',
        alignItems: 'center',
        marginTop: 30,
        width: 160,
        marginLeft: 10,
    },
    text: {
        color: 'black',
        fontSize: 11,
        fontWeight: '400'
    },
});