import { Redirect, Tabs } from "expo-router";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { HapticTab } from "@/components/HapticTab";
import { View } from "react-native";
import { useAuth } from "@/app/context/AuthProvider";

export default function TabLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "grey",
          height: 85,
          paddingTop: 7,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                padding: 3,
                alignItems: "center",
                justifyContent: "center",
                // Add margin to push icon up
              }}
            >
              <IconSymbol size={28} name="house.fill" color="black" />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                padding: 1,
                alignItems: "center",
                justifyContent: "center",
                // Add margin to push icon up
              }}
            >
              <IconSymbol size={28} name="paperplane.fill" color="black" />
            </View>
          ),
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tabs>
  );
}
