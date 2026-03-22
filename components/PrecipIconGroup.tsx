import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PrecipOption } from "@/types";

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
            onPress={() => onChange(opt.key)}
            style={{
              flex: 1,
              padding: 16,
              borderRadius: 16,
              backgroundColor: isActive ? "#4690ff" :"#f7fbff",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Ionicons
              name={opt.icon}
              size={38}
              color={isActive ? "white" : "#4b5563"}
            />
            <Text
              style={{
                color: isActive ? "white" : "#374151",
                fontWeight: "600",
              }}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}