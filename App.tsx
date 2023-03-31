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
import { TamaguiProvider, Theme } from "tamagui";
import config from "./tamagui.config";
import {
	KumbhSans_100Thin,
	KumbhSans_200ExtraLight,
	KumbhSans_300Light,
	KumbhSans_400Regular,
	KumbhSans_500Medium,
	KumbhSans_600SemiBold,
	KumbhSans_700Bold,
	KumbhSans_800ExtraBold,
	KumbhSans_900Black,
} from "@expo-google-fonts/kumbh-sans";

polyfillWebCrypto();
SplashScreen.preventAutoHideAsync();

export default function App() {
	let [fontsLoaded] = useFonts({
		KumbhSans_100Thin,
		KumbhSans_200ExtraLight,
		KumbhSans_300Light,
		KumbhSans_400Regular,
		KumbhSans_500Medium,
		KumbhSans_600SemiBold,
		KumbhSans_700Bold,
		KumbhSans_800ExtraBold,
		KumbhSans_900Black,
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
		<TamaguiProvider config={config}>
			<Theme name={"dark"}>
				<Theme name="blue">
					<DripsyProvider theme={dripsyTheme}>
						<View onLayout={onLayoutRootView} />
						<RootStack />
						<StatusBar style="light" />
					</DripsyProvider>
				</Theme>
			</Theme>
		</TamaguiProvider>
	);
}
