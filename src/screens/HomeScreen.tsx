import { Text, View } from "dripsy";
import { Button } from "react-native";
import { MainScreenView } from "../components/screenviews";
import { useAuthState } from "../state/authState";

export default function HomeScreen() {
	const authState = useAuthState();

	return (
		<MainScreenView>
			<View
				variant="layout.full_screen"
				sx={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text variant="text.body_large" sx={{ color: "light" }}>
					Home
				</Text>
				<Button
					title="LogOut"
					onPress={() => {
						authState.clearHistory();
					}}
				/>
			</View>
		</MainScreenView>
	);
}
