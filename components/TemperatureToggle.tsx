import React from "react";
import { Text, Pressable } from "react-native";
import * as Haptics from "expo-haptics";
import { Ionicons } from "@expo/vector-icons";
import { TempOption } from "@/types";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
    options: TempOption[];
    value: 'hot' | 'cold' | null;
    onChange: (val: 'hot' | 'cold' | null) => void;
};

export default function TemperatureToggle({ options, value, onChange }: Props) {
    return (
        <LinearGradient
            colors={['#88b6ff', '#ff6030']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
                flexDirection: "row",
                borderRadius: 999,
                padding: 4,
                marginTop: 12,
                marginHorizontal: 16,
                paddingVertical: 12,
                alignSelf: 'stretch',
            }}
        >
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
                            paddingVertical: 8,
                            borderRadius: 999,
                            backgroundColor: isActive ? 'rgba(255,255,255,0.3)' : 'transparent',
                            alignItems: 'center',
                        }}
                    >
                        <Ionicons
                            name={opt.icon}
                            size={20}
                            color={"white"}
                        />
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "600",
                            }}
                        >
                            {opt.label}
                        </Text>
                    </Pressable>
                );
            })}
        </LinearGradient>
    );
}