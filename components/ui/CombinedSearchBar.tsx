import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, NativeSyntheticEvent, TextInputSubmitEditingEventData, TextInput as RNTextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface CombinedSearchBarProps {
    initialValue?: string;
    subtitle?: string;
    onSearch?: (query: string) => void;
    onEditPress?: () => void;
}

const CombinedSearchBar: React.FC<CombinedSearchBarProps> = ({
                                                                 initialValue = "BUKHARA",
                                                                 subtitle = "Sep 12 – 15 • 1 guide • 2 guests",
                                                                 onSearch,
                                                                 onEditPress,
                                                             }) => {
    const [editing, setEditing] = useState(false);
    const [query, setQuery] = useState(initialValue);
    const inputRef = useRef<RNTextInput>(null);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]);

    const handleSubmit = (e?: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        setEditing(false);
        if (onSearch) onSearch(query);
    };

    if (!editing) {
        return (
            <Pressable
                className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mx-4 my-2"
                onPress={() => setEditing(true)}
                android_ripple={{ color: "#E5E7EB" }}
            >
                <FontAwesome name="search" size={22} color="#111" style={{ marginRight: 12 }} />
                <View className="flex-1">
                    <Text className="text-base font-bold text-black">{query}</Text>
                    <Text className="text-gray-400 text-sm mt-0.5">
                        {subtitle}
                    </Text>
                </View>
                <TouchableOpacity onPress={onEditPress}>
                    <FontAwesome name="edit" size={18} color="#111" />
                </TouchableOpacity>
            </Pressable>
        );
    }

    return (
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mx-2 my-2">
            <FontAwesome name="search" size={22} color="#111" style={{ marginRight: 12 }} />
            <View className="flex-1">
                <TextInput
                    ref={inputRef}
                    className="text-base font-bold text-black"
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Search location"
                    placeholderTextColor="#999"
                    onBlur={() => setEditing(false)}
                    onSubmitEditing={handleSubmit}
                    returnKeyType="search"
                    blurOnSubmit
                />
                <Text className="text-gray-400 text-sm mt-0.5">
                    {subtitle}
                </Text>
            </View>
            <TouchableOpacity onPress={onEditPress}>
                <FontAwesome name="pencil" size={18} color="#111" />
            </TouchableOpacity>
        </View>
    );
};

export default CombinedSearchBar;