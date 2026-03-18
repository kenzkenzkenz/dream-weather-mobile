import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';
import CustomButton from './CustomButton';

export default function PreferenceForm() {
    const USA = {
        "iso_code": "US",
        "name": "United States"
    }
    const [country, setCountry] = useState(USA)
    const [precip, setPrecip] = useState('');
    const [temp, setTemp] = useState('');


    const handleSubmit = async () => {
        const req = {
            "country": country,
            "precipitation": precip,
            "temperature": temp
        }
        try {

        } catch (error) {

        }
    }

    return (
        <View style={styles.container}>

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
            <CustomButton
                title={`Let's Go!`}
                values={{ country, precip, temp }}
                onPress={handleSubmit}>
            </CustomButton>
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