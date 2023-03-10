import { Text, View } from "dripsy";
import { MainScreenView } from "../components/screenviews";

export default function HomeScreen() {
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
			</View>
		</MainScreenView>
	);
}
