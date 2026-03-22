import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubmitButton from './SubmitButton';
import { Country, Preferences } from '@/types';
import PrecipIconGroup from './PrecipIconGroup';
import TemperatureToggle from './TemperatureToggle';
import { PrecipOption, TempOption } from '@/types';

type Props = {
    onSubmit: (values: Preferences) => void;
    precip: 'none' | 'rain' | 'snow' | null;
    setPrecip: (precip: 'none' | 'rain' | 'snow' | null) => void;
};

export default function PreferenceForm({ onSubmit, precip, setPrecip }: Props) {

    const USA: Country = {
        iso_code: "US",
        name: "United States"
    }

    const [country, setCountry] = useState<Country>(USA)
    const [temp, setTemp] = useState<'hot' | 'cold' | null>(null);

    const precipOptions: PrecipOption[] = [
        { key: 'none', label: 'None', icon: 'sunny-outline' },
        { key: 'rain', label: 'Rain', icon: 'rainy-outline' },
        { key: 'snow', label: 'Snow', icon: 'snow-outline' },
    ];

    const tempOptions: TempOption[] = [
        { key: 'cold', label: 'Cool/Cold', icon: 'snow-outline' },
        { key: 'hot', label: 'Warm/Hot', icon: 'flame-outline' },
    ];

    useEffect(() => {
        if (!precip || !temp) {
            return;
        }

        if (precip === 'snow' && temp === 'hot') {
            setTemp('cold');
            alert("The weather doesn't work like that! Try something else.");
            return;
        }

    }, [precip, temp]);

    return (
        <View style={styles.container}>
            <Text style={styles.description}>Tell us what vibe you want, and we'll send you to the perfect U.S. location.</Text>
            <Text style={styles.label}>Precipitation</Text>
            <PrecipIconGroup
                options={precipOptions}
                value={precip!}
                onChange={(val) => setPrecip(val)}
            />

            <Text style={styles.label}>Temperature</Text>
            <TemperatureToggle
                options={tempOptions}
                value={temp}
                onChange={(val) => setTemp(val)}
            />

            <View style={{ margin: 20 }}></View>
            <SubmitButton
                title={`Let's Go!`}
                values={{ precipitation: precip!, temperature: temp!, country }}
                onPress={onSubmit}
                disabled={!precip || !temp}>
            </SubmitButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 20,
    },
    description: {
        fontSize: 18,
        fontWeight: '500',
        backgroundColor: 'rgba(255, 255, 255, 0.14)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
    label: {
        marginTop: 40,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.14)',
        borderRadius: 20,
        overflow: 'hidden',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})