import Svg, { Path, Circle, G } from 'react-native-svg';

export default function RainIcon({ size = 40 }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 64 64">
            <G>
                {/* Cloud */}
                <Path
                    d="M10 35h44a10 10 0 0 0 0-20 18 18 0 0 0-34-3A8 8 0 0 0 10 35z"
                    fill="#ffffff"
                />

                {/* Main raindrops under cloud */}
                <Circle cx="18" cy="45" r="2.5" fill="#60a5fa" />
                <Circle cx="28" cy="50" r="2.5" fill="#60a5fa" />
                <Circle cx="38" cy="45" r="2.5" fill="#60a5fa" />
                <Circle cx="48" cy="50" r="2.5" fill="#60a5fa" />
                <Circle cx="38" cy="57" r="2.5" fill="#60a5fa" />

                {/* Random drops */}
                <Circle cx="8" cy="44" r="2" fill="#60a5fa"/>
                <Circle cx="55" cy="46" r="1.7" fill="#60a5fa"/>
                <Circle cx="68" cy="30" r="2" fill="#60a5fa"/>
                <Circle cx="12" cy="55" r="1.7" fill="#60a5fa"/>
                <Circle cx="72" cy="58" r="2" fill="#60a5fa"/>
                <Circle cx="70" cy="20" r="1.7" fill="#60a5fa"/>
                <Circle cx="6" cy="50" r="1.7" fill="#60a5fa"/>
                <Circle cx="65" cy="45" r="2" fill="#60a5fa"/>
                <Circle cx="22" cy="57" r="2" fill="#60a5fa" />

            </G>
        </Svg>
    );
}