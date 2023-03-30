import { Pressable, View } from "dripsy";
import { Button } from "react-native";
import { useHomeStackNavigation } from "../../navigation/types";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function NavBar() {
	const navigation = useHomeStackNavigation();

	return (
		<View
			sx={{
				backgroundColor: "off_dark",
				height: 60,
				width: "50%",
				borderRadius: 60,
				flexDirection: "row",
				justifyContent: "space-evenly",
				alignItems: "center",
				bottom: 100,
				position: "absolute",
			}}
		>
			<Pressable
				onPress={() => {
					navigation.navigate("ConnectWalletScreen");
				}}
			>
				<Ionicons name="scan" size={32} color="#E5E5E5" />
			</Pressable>
			<View
				sx={{
					width: 1,
					height: 30,
					backgroundColor: "light",
					opacity: 0.5,
				}}
			/>
			<Pressable
				onPress={() => {
					navigation.navigate("ConnectedDappsScreen");
				}}
			>
				<Ionicons name="apps" size={32} color="#E5E5E5" />
			</Pressable>
		</View>
	);
}
