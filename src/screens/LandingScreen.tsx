import { View, Text } from "dripsy";
import { Button } from "react-native";
import { AuthScreenView } from "../components/screenviews";
import { useAuthState } from "../state/authState";

export default function LandingScreen() {
	const authState = useAuthState();

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
						authState.setAuthDetails({
							address: "0x1234567890",
							loggedIn: true,
						});
					}}
				/>
			</View>
		</AuthScreenView>
	);
}
