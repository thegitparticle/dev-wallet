import { MainScreenView } from "../components/screenviews";
import { View, Text } from "dripsy";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { dimensions } from "../theme/dripsyTheme";
import WalletConnect from "@walletconnect/client";
import { useLiveWalletsState } from "../state/liveWalletsState";
import { web3wallet } from "../utils/web3WalletConfig";
import { parseUri } from "@walletconnect/utils";
import { setupWalletConnectV1 } from "../utils/walletConnectv1Config";

export default function ConnectWalletScreen() {
	const liveWalletsState = useLiveWalletsState();

	const [scanned, setScanned] = useState(false);

	const [permission, requestPermission] = BarCodeScanner.usePermissions();

	async function handleBarCodeScanned({ type, data }) {
		setScanned(true);

		const parsedData = parseUri(data);

		if (parsedData.version === 2) {
			await web3wallet.core.pairing.pair({ uri: data });
		} else {
			console.log("wc v1 needed");
			setupWalletConnectV1({
				uri: data,
				liveWallets: liveWalletsState.wallets,
			});
		}
	}

	if (!permission) {
		BarCodeScanner.requestPermissionsAsync();
		return <Text>Requesting for camera permission</Text>;
	}
	if (!permission.granted) {
		BarCodeScanner.requestPermissionsAsync();
		return <Text>No access to camera</Text>;
	}

	return (
		<MainScreenView>
			<View
				variant="layout.full_screen"
				sx={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<BarCodeScanner
					onBarCodeScanned={
						scanned ? undefined : handleBarCodeScanned
					}
					style={{
						height: dimensions.fullHeight * 0.5,
						width: dimensions.fullWidth,
					}}
				/>
				<Text
					variant="text.body_large"
					sx={{ color: "light", my: "$2" }}
				>
					Connect wallet
				</Text>
			</View>
		</MainScreenView>
	);
}
