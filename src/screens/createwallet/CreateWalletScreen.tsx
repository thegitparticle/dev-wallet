import { Text, View } from "dripsy";
import { ethers } from "ethers";
import { useEffect } from "react";
import { Button } from "react-native";
import { AuthScreenView } from "../../components/screenviews";
import { useAuthStackNavigation } from "../../navigation/types";
import {
	LiveWalletDetails,
	useLiveWalletsState,
} from "../../state/liveWalletsState";

export default function CreateWalletScreen() {
	const walletsState = useLiveWalletsState();
	const navigaton = useAuthStackNavigation();

	let newWalletDetails: LiveWalletDetails;

	const createWallet = async () => {
		const newWallet = ethers.Wallet.createRandom();

		newWalletDetails = {
			address: newWallet.address,
			privateKey: newWallet.privateKey,
			mnemonicPhrase: newWallet.mnemonic.phrase,
		};

		walletsState.addWallet(newWalletDetails);

		navigaton.navigate("ShowSeedPhraseScreen");
	};

	useEffect(() => {
		setTimeout(() => {
			createWallet();
		}, 1000);
	}, []);

	return (
		<AuthScreenView>
			<View
				variant="layout.full_screen"
				sx={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text variant="text.body_large" sx={{ color: "light" }}>
					creating wallet
				</Text>
			</View>
		</AuthScreenView>
	);
}
