import { Text, View } from "dripsy";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { MainScreenView } from "../components/screenviews";
import { useHomeStackNavigation } from "../navigation/types";
import { useAuthState } from "../state/authState";
import { goerliAlchemy, mumbaiAlchemy } from "../utils/alchemyConfig";

export default function HomeScreen() {
	const authState = useAuthState();
	const navigation = useHomeStackNavigation();

	const userWalletAddress = authState.authDetails.address;

	const [goerliBalance, setGoerliBalance] = useState("");
	const [mumbaiBalance, setMumbaiBalance] = useState("");

	useEffect(() => {
		async function fetchBalances() {
			const goerliBalance = await goerliAlchemy.core.getBalance(
				userWalletAddress
			);
			const mumbaiBalance = await mumbaiAlchemy.core.getBalance(
				userWalletAddress
			);
			setGoerliBalance(ethers.utils.formatEther(goerliBalance));
			setMumbaiBalance(ethers.utils.formatEther(mumbaiBalance));
		}

		fetchBalances();
	}, []);

	return (
		<MainScreenView>
			<View
				variant="layout.full_screen"
				sx={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					variant="text.body_large"
					sx={{ color: "light", my: "$2" }}
				>
					{userWalletAddress}
				</Text>
				<Text
					variant="text.body_large"
					sx={{ color: "light", my: "$2" }}
				>
					{goerliBalance}
				</Text>
				<Text
					variant="text.body_large"
					sx={{ color: "light", my: "$2" }}
				>
					{mumbaiBalance}
				</Text>
				<Button
					title="Connect Wallet"
					color="blue"
					onPress={() => {
						navigation.navigate("ConnectWalletScreen");
					}}
				/>
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
