import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';
import SubmitButton from './SubmitButton';
import { Country, Preferences } from '@/types';

type Props = {
    onSubmit: (values: Preferences) => void;
};

export default function PreferenceForm({ onSubmit }: Props) {

    const USA: Country = {
        iso_code: "US",
        name: "United States"
    }

    const [country, setCountry] = useState<Country>(USA)
    const [precip, setPrecip] = useState<'none' | 'rain' | 'snow' | null>(null);
    const [temp, setTemp] = useState<'hot' | 'cold' | null>(null);

    useEffect(() => {
        if (!precip || !temp) {
            return;
        }

        if (precip === 'snow' && temp === 'hot') {
            setPrecip(null);
            setTemp(null);
            alert("The weather doesn't work like that! Try something else.");
            return;
        }

    }, [precip, temp]);

    return (
        <View style={styles.container}>
            <Text>Tell us what vibe you want, and we'll send you to the perfect U.S. location.</Text>
            <Text style={styles.label}>Precipitation</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <RadioButton label="None" value="none" selected={precip} onSelect={setPrecip} />
                <RadioButton label="Rain" value="rain" selected={precip} onSelect={setPrecip} />
                <RadioButton label="Snow" value="snow" selected={precip} onSelect={setPrecip} />
            </View>

            <Text style={styles.label}>Temperature</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <RadioButton label="Cool/Cold" value="cold" selected={temp} onSelect={setTemp} />
                <RadioButton label="Warm/Hot" value="hot" selected={temp} onSelect={setTemp} />
            </View>
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
    label: {
        marginTop: 30,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    }
})