import { Text, View } from "dripsy";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import BalanceList from "../components/balances/BalanceList";
import { MainScreenView } from "../components/screenviews";
import { useGoerliBalances } from "../hooks/useGoerliBalances";
import { useHomeStackNavigation } from "../navigation/types";
import { useAuthState } from "../state/authState";
import { goerliAlchemy, mumbaiAlchemy } from "../utils/alchemyConfig";
import Modal from "react-native-modal";
import ConnectionRequestSheet from "../components/sheets/ConnectionRequestSheet";
import { showConnectionRequestSheet } from "../utils/web3WalletConfig";
import NavBar from "../components/home/NavBar";
import Constants from "expo-constants";
import WalletSwitcher from "../components/home/WalletSwitcher";
import CurrentWallet from "../components/home/CurrentWallet";
/*

1. show wallet address - highlight the first and last few chars
2. Tabs to show list of balances
3. 3 nav bar buttons

*/

const statusBarHeight = Constants.statusBarHeight;

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

	// const { loading, balances } = useGoerliBalances(
	// 	"0x1239b15ECE331E2eE767710a1953D889B59Ae84c"
	// );

	return (
		<MainScreenView>
			<View
				variant="layout.full_screen"
				sx={{
					marginTop: statusBarHeight,
					margin: "$4",
				}}
			>
				<WalletSwitcher />
				<CurrentWallet />

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
				<NavBar />
				<Button
					title="LogOut"
					onPress={() => {
						authState.clearHistory();
					}}
				/>

				{/* {!loading ? (
					<BalanceList balanceList={balances} />
				) : (
					<Text
						variant="text.body_large"
						sx={{ color: "light", my: "$2" }}
					>
						no goerli balances
					</Text>
				)} */}
			</View>
		</MainScreenView>
	);
}
