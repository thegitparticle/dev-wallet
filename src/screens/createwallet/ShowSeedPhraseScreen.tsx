import { AuthScreenView } from "../../components/screenviews";
import { View, Text } from "dripsy";
import { useAuthStackNavigation } from "../../navigation/types";
import { useLiveWalletsState } from "../../state/liveWalletsState";
import SeedPhraseComponent from "../../components/auth/SeedPhraseComponent";
import { useAuthState } from "../../state/authState";
import { useSx } from "dripsy";
import { Button, YStack } from "tamagui";

export default function ShowSeedPhraseScreen() {
	const navigation = useAuthStackNavigation();
	const walletsState = useLiveWalletsState();
	const authState = useAuthState();

	let walletToShow = walletsState.wallets[0];

	return (
		<AuthScreenView>
			<YStack flex={1} justifyContent="space-between" alignItems="center">
				<View style={{ marginVertical: "10%" }} />
				<SeedPhraseComponent seedPhrase={walletToShow.mnemonicPhrase} />
				<Button
					onPress={() =>
						authState.setAuthDetails({
							address: walletToShow.address,
							loggedIn: true,
						})
					}
					style={{ marginVertical: "10%" }}
				>
					<Text variant="button_large" sx={{ color: "light" }}>
						i've saved
					</Text>
				</Button>
			</YStack>
		</AuthScreenView>
	);
}
