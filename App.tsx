import "@ethersproject/shims";

import { DripsyProvider, View } from "dripsy";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import RootStack from "./src/navigation/RootStack";
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
			<View onLayout={onLayoutRootView} />
			<RootStack />
			<StatusBar style="light" />
		</DripsyProvider>
	);
}
