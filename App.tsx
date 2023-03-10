import { DripsyProvider, Text, View } from "dripsy";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { dripsyTheme } from "./src/theme/dripsyTheme";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		"Kumbh-Sans": require("./assets/fonts/KumbhSans-VariableFont_wght.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<DripsyProvider theme={dripsyTheme}>
			<View
				variant="layout.full_screen"
				sx={{ justifyContent: "center", alignItems: "center" }}
				onLayout={onLayoutRootView}
			>
				<Text variant="text.body_large">
					Dev Wallet - a no frills wallet for developers
				</Text>
				<StatusBar style="auto" />
			</View>
		</DripsyProvider>
	);
}
