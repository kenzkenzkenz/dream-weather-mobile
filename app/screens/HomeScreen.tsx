import { View, ScrollView, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Title from '@/components/Title';
import PreferenceForm from '@/components/PreferenceForm';
import ResultScreen from './ResultScreen';
import { MatchResponse, Country } from '@/types';
import Footer from '@/components/Footer';
import TryAgainButton from '@/components/TryAgainButton';
import Loader from '@/components/Loader';
import ReportButton from '@/components/ReportButton';

export default function HomeScreen() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'no-data' | 'rate-limit' | 'forbidden'>('idle');
    const [match, setMatch] = useState<MatchResponse | null>(null);
    const [fact, setFact] = useState<string>('');

    const backendUrl = 'https://dream-weather-backend.onrender.com';
    const aiServer = 'https://fun-fact-server.onrender.com';

    const headers = {
        'Content-Type': 'application/json',
    };

    const getFact = async () => {
        try {
            const response = await fetch(`${aiServer}/fact`, {
                method: 'GET',
            });
            if (!response.ok) {
                console.error('Failed to fetch fact');
                return;
            }
            const data = await response.json();
            setFact(data.fact);
        } catch (error) {
            console.error('Error fetching fact:', error);
        }
    };

    useEffect(() => {
        if (status === 'idle') {
            setMatch(null);
            setFact('');
            getFact();
        }
    }, [status]);

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                <Title />
                <View style={{ margin: 10 }}>
                    {status === 'idle' && <PreferenceForm onSubmit={handleSubmit} />}

                    {status === 'success' && <ResultScreen match={match} />}

                    {status === 'success' && (
                        <TryAgainButton title="Go Again!" onPress={() => setStatus('idle')} />)
                    }

                    {status === 'success' && (
                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ marginTop: 10 }}>{"Livestream Unavailable?"}</Text>
                            <ReportButton title="Report" onPress={() => alert('This feature is under construction.')} />
                        </View>
                    )}

                    {status === 'loading' &&
                        <View>
                            <Loader fact={fact} />
                        </View>
                    }

                    {status === 'error' && (
                        <View style={styles.container}>
                            <View style={styles.message}>
                                <Text>{"There was an error. Please try again."}</Text>
                            </View>
                            <TryAgainButton title="Go Again!" onPress={() => setStatus('idle')} />
                        </View>
                    )}

                    {status === 'no-data' && (
                        <View style={styles.container}>
                            <View style={styles.message}>
                                <Text>{"No matching locations found. Try again later."}</Text>
                            </View>
                            <TryAgainButton title="Go Again!" onPress={() => setStatus('idle')} />
                        </View>
                    )}

                    {status === 'rate-limit' && (
                        <View style={styles.container}>
                            <View style={styles.message}>
                                <Text>{"Too many requests! Maybe take a break and go outside."}</Text>
                            </View>
                            <TryAgainButton title="Go Again!" onPress={() => setStatus('idle')} />
                        </View>
                    )}

                    {status === 'forbidden' && (
                        <View style={styles.container}>
                            <View style={styles.message}>
                                <Text>{"A third-party server is currently down. We're working to resolve the issue."}</Text>
                            </View>
                            <TryAgainButton title="Go Again!" onPress={() => setStatus('idle')} />
                        </View>
                    )}

                </View>
                <Footer />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        borderColor: '#ffffff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    message: {
        marginBottom: 60,
        alignItems: 'center',
    }
});