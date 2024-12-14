import { View, Text, Button } from "react-native";
import { supabase } from "@/lib/supabase";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-gray-700 font-bold text-center">Hello World</Text>
      <Button title="Logout" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
