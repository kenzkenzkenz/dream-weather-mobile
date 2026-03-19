import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Title from '@/components/Title';
import PreferenceForm from '@/components/PreferenceForm';
import ResultScreen from './ResultScreen';
import { MatchResponse, Country } from '@/types';
import Footer from '@/components/Footer';

export default function HomeScreen() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'no-data' | 'rate-limit' | 'forbidden'>('idle');
    const [match, setMatch] = useState<MatchResponse | null>(null);

    const backendUrl = 'https://dream-weather-backend.onrender.com';

    const headers = {
        'Content-Type': 'application/json',
    };

    const handleSubmit = async (values: {
        precipitation: string;
        temperature: string;
        country: Country
    }) => {
        setStatus('loading');

        const reqBody = {
            country: values.country,
            precipitation: values.precipitation,
            temperature: values.temperature
        };

        try {
            const response = await fetch(`${backendUrl}/api/v1/livestream/match`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(reqBody)
            });

            if (!response.ok) {
                if (response.status === 404) {
                    setStatus('no-data');
                }
                else if (response.status === 403) {
                    setStatus('forbidden');
                }
                else if (response.status === 429) {
                    setStatus('rate-limit');
                }
                else {
                    setStatus('error');
                }
                return;
            }

            const data = await response.json();

            if (!data) {
                setStatus('no-data');
                return;
            }

            setMatch(data);
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
                <Title />
                <View style={{ margin: 20 }}>
                    {status === 'idle' && <PreferenceForm onSubmit={handleSubmit} />}
                    {status === 'success' && <ResultScreen match={match} />}
                </View>
                <Footer />
            </View>
        </ScrollView>
    )
}