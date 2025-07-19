import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CombinedSearchBar({
                                              initialValue = "BUKHARA",
                                              subtitle = "Sep 12 – 15 • 1 guide • 2 guests",
                                              onSearch,
                                              onEditPress,
                                          }) {
    const [editing, setEditing] = useState(false);
    const [query, setQuery] = useState(initialValue);
    const inputRef = useRef(null);

    // Focus input automatically when editing starts
    React.useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editing]);

    // When user submits, close edit mode and trigger search
    const handleSubmit = () => {
        setEditing(false);
        if (onSearch) onSearch(query);
    };

    // Static summary bar
    if (!editing) {
        return (
            <Pressable
                className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mx-2 my-2"
                onPress={() => setEditing(true)}
                android_ripple={{ color: "#E5E7EB" }}
            >
                <FontAwesome name="search" size={22} color="#111" className="mr-3" />
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

    // Editable search bar
    return (
        <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-3 mx-2 my-2">
            <FontAwesome name="search" size={22} color="#111" className="mr-3" />
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
                <FontAwesome name="edit" size={18} color="#111" />
            </TouchableOpacity>
        </View>
    );
}