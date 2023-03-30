import { AuthScreenView } from "../../components/screenviews";
import { View, Text } from "dripsy";
import { Button } from "react-native";
import { useAuthStackNavigation } from "../../navigation/types";
import { useLiveWalletsState } from "../../state/liveWalletsState";
import SeedPhraseComponent from "../../components/auth/SeedPhraseComponent";
import { useAuthState } from "../../state/authState";
import { useSx } from "dripsy";

export default function ShowSeedPhraseScreen() {
	const navigation = useAuthStackNavigation();
	const walletsState = useLiveWalletsState();
	const authState = useAuthState();

	const sx = useSx();

	let walletToShow = walletsState.wallets[0];

	return (
		<AuthScreenView>
			<View
				variant="layout.full_screen"
				sx={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<SeedPhraseComponent seedPhrase={walletToShow.mnemonicPhrase} />
				<Button
					title="Continue"
					color="green"
					onPress={() =>
						authState.setAuthDetails({
							address: walletToShow.address,
							loggedIn: true,
						})
					}
				/>
			</View>
		</AuthScreenView>
	);
}
