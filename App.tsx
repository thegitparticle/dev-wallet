import "@ethersproject/shims";
import { Buffer } from "buffer";
import "react-native-get-random-values";
import "text-encoding-polyfill";
global.Buffer = Buffer;
import "@walletconnect/react-native-compat";
import "react-native-gesture-handler";

import { DripsyProvider, View } from "dripsy";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { polyfillWebCrypto } from "expo-standard-web-crypto";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import RootStack from "./src/navigation/RootStack";
import { dripsyTheme } from "./src/theme/dripsyTheme";

polyfillWebCrypto();
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
