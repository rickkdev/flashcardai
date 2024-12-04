import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-2">
      <Text className="text-2xl font-bold text-gray-400">FlashcardAi</Text>
      <Text className="text-lg text-gray-400">Let's get started</Text>
    </View>
  );
}
