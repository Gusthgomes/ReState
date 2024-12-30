import { Stack } from "expo-router";

import "../globals.css";

export default function RootLayout () {
  return (
    <Stack>
      <Stack.Screen name="/(root)/(tabs)/index" options={{ headerShown: false }}/>
    </Stack>
  )
}