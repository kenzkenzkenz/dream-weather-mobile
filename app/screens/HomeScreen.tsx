import { View, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import PreferenceForm from '@/components/PreferenceForm';
import ResultScreen from './ResultScreen';
import { MatchResponse, Country } from '@/types';
import TryAgainButton from '@/components/TryAgainButton';
import Loader from '@/components/Loader';
import ReportButton from '@/components/ReportButton';

export default function HomeScreen() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'no-data' | 'rate-limit' | 'forbidden'>('idle');
    const [match, setMatch] = useState<MatchResponse | null>(null);
    const [fact, setFact] = useState<string>('');
    const [precip, setPrecip] = useState<'none' | 'rain' | 'snow' | null>(null);

    const backendUrl = 'https://dream-weather-backend.onrender.com';
    const aiServer = 'https://fun-fact-server.onrender.com';
    const defaultImage = require('../../assets/images/fromsalih-mountains-6376016_1280.jpg');
    const precipImages = {
        none: require('../../assets/images/engin_akyurt-cloudy-4374619_1280.jpg'),
        rain: require('../../assets/images/q839809004-airplane-window-1765775_1280.jpg'),
        snow: require('../../assets/images/jillwellington-tree-6835819_1280.jpg'),
    };

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
            setPrecip(null);
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
            <ImageBackground
                source={precip ? precipImages[precip] : defaultImage}
                style={styles.background}
                blurRadius={5}
            >
                <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
                    <View>
                        {status === 'idle' &&
                            <PreferenceForm onSubmit={handleSubmit} precip={precip} setPrecip={setPrecip} />}

                        {status === 'success' && (
                            <>
                                <ResultScreen match={match} />
                                <TryAgainButton
                                    title="Go Again!"
                                    onPress={() => setStatus('idle')}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <ReportButton
                                        title="Report Broken Livestream"
                                        onPress={() => alert('This feature is under construction.')}
                                    />
                                </View>
                            </>
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
                </View>
            </ImageBackground>
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
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    message: {
        marginBottom: 60,
        alignItems: 'center',
    },
    unavailableMessage: {
        fontStyle: 'italic',
        backgroundColor: 'rgba(255, 255, 255, 0.40)',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 20,
        marginTop: 10,
    },
});