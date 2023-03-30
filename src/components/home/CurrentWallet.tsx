import { Pressable, Text, View } from "dripsy";
import { useState } from "react";
import { useLiveWalletsState } from "../../state/liveWalletsState";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CurrentWallet() {
	const liveWalletsState = useLiveWalletsState();

	const currentWallet = liveWalletsState.wallets[0];

	const [showFullAddress, setShowFullAddress] = useState<boolean>(false);

	return (
		<View
			variant="layout.child_view_20"
			sx={{ flexDirection: "row", alignItems: "center" }}
		>
			<Pressable onPress={() => setShowFullAddress(!showFullAddress)}>
				<Text
					variant="text.heading_large"
					sx={{ color: "light", my: "$2" }}
					ellipsizeMode="tail"
				>
					{showFullAddress
						? currentWallet.address
						: currentWallet.address.slice(0, 6) +
						  "..." +
						  currentWallet.address.slice(-4)}
				</Text>
			</Pressable>
			<Pressable
				onPress={() => setShowFullAddress(!showFullAddress)}
				sx={{ mx: "$1" }}
			>
				<Ionicons name="ios-copy" size={20} color="#E5E5E5" />
			</Pressable>
			<Pressable
				onPress={() => setShowFullAddress(!showFullAddress)}
				sx={{ mx: "$1" }}
			>
				<Ionicons name="ios-qr-code" size={20} color="#E5E5E5" />
			</Pressable>
		</View>
	);
}
