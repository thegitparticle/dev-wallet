import { View } from "dripsy";
import { Button } from "react-native";
import { useHomeStackNavigation } from "../../navigation/types";

export default function NavBar() {
	const navigation = useHomeStackNavigation();

	return (
		<View
			sx={{
				backgroundColor: "off_dark",
				height: 50,
				width: "50%",
				borderRadius: 25,
				flexDirection: "row",
				bottom: 50,
				position: "absolute",
			}}
		>
			<Button
				title="Connect Wallet"
				color="blue"
				onPress={() => {
					navigation.navigate("ConnectWalletScreen");
				}}
			/>

			<Button
				title="COnnected Dapps"
				color="blue"
				onPress={() => {
					navigation.navigate("ConnectedDappsScreen");
				}}
			/>
		</View>
	);
}
