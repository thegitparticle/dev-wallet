import { Text } from "dripsy";
import { ethers } from "ethers";
import { useEffect } from "react";
import { Spinner, YStack } from "tamagui";
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
			<YStack flex={1} justifyContent="center" alignItems="center">
				<Spinner size="large" color="$orange10" />
				<Text variant="body_large" sx={{ color: "light", my: "$4" }}>
					creating new wallet
				</Text>
			</YStack>
		</AuthScreenView>
	);
}
