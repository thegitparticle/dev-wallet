import { View, Text } from "dripsy";
import { AuthScreenView } from "../components/screenviews";

export default function LandingScreen() {
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
			</View>
		</AuthScreenView>
	);
}
