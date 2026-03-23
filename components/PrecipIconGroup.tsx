import { View, Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { PrecipOption } from "@/types";
import PartlyCloudyIcon from "./PartlyCloudyIcon";
import RainIcon from "./RainIcon";
import SnowIcon from "./SnowIcon";

type Props = {
  options: PrecipOption[];
  value: 'none' | 'rain' | 'snow' | null;
  onChange: (val: 'none' | 'rain' | 'snow' | null) => void;
};

export default function PrecipIconGroup({
  options,
  value,
  onChange,
}: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 12, marginTop: 12 }}>
      {options.map((opt) => {
        const isActive = value === opt.key;

        return (
          <Pressable
            key={opt.key}
            onPress={() => {
              onChange(opt.key);
              Haptics.selectionAsync();
            }}
            style={{
              flex: 1,
              borderRadius: 16,
              shadowOpacity: isActive ? 0.6 : 0,
              shadowRadius: isActive ? 10 : 0,
              elevation: isActive ? 8 : 0,
            }}
          >
            {/* selection glow */}
            <LinearGradient
              colors={isActive ? ['#fcdadab2', '#ffe89ea4', '#ffffffab', '#b4e8fdad', '#ffffffb2'] : ['transparent', 'transparent']}
              style={{
                position: 'absolute',
                top: -5,
                bottom: -5,
                left: -5,
                right: -5,
                borderRadius: 22,
                zIndex: 0,
              }}
            />
            <LinearGradient
              colors={
                opt.key === 'none' ? ['#ffffff', '#9dc9ff'] // sunny
                  : opt.key === 'rain' ? ['#9ab2cf', '#dde3f0'] // rain
                    : ['#dbcdfa', '#cee1fa'] // snow
              }
              style={{
                padding: 16,
                borderRadius: 16,
                alignItems: 'center',
                gap: 8,
              }}
            >
              {opt.key === 'none' && <PartlyCloudyIcon />}
              {opt.key === 'rain' && <RainIcon />}
              {opt.key === 'snow' && <SnowIcon />}
              <Text
                style={{
                  color: "#374151",
                  fontWeight: "600",
                }}
              >
                {opt.label}
              </Text>
            </LinearGradient>
          </Pressable>
        );
      })}
    </View>
  );
}