export type Country = {
    name: string;
    iso_code: string;
};

export type Forecast = {
    shortForecast: string;
    temperature: number;
};

export type LocationData = {
    slug: string,
    title: string,
    description: string,
    city: string | null,
    latitude: string,
    longitude: string,
    stream_type: string,
    stream_url: string,
    country: Country;
    forecast: Forecast;
};

export type MatchResponse = {
    success: boolean;
    message: string;
    data: LocationData | null;
};

export type Preferences = {
    precipitation: 'none' | 'rain' | 'snow';
    temperature: 'hot' | 'cold';
    country: Country;
};