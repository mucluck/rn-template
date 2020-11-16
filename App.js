import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, List, Settings } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
    });

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <View style={styles.container}>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Settings" component={List} />
                    <Tab.Screen name="Settings" component={Settings} />
                </View>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
