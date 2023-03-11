import { Text, View } from "dripsy";
import { Button } from "react-native";
import { AuthScreenView } from "../components/screenviews";
import { useAuthStackNavigation } from "../navigation/types";

export default function LandingScreen() {
	const navigation = useAuthStackNavigation();

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
					Dev Wallet - a no frills wallet for developers
				</Text>
				<Button
					title="Login"
					onPress={() => {
						navigation.navigate("CreateWalletScreen");
					}}
				/>
			</View>
		</AuthScreenView>
	);
}
