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
import BalanceLists from "../components/home/BalanceLists";
import AsyncStorage from "@react-native-async-storage/async-storage";
/*

1. show wallet address - highlight the first and last few chars
2. Tabs to show list of balances
3. 3 nav bar buttons

*/

const statusBarHeight = Constants.statusBarHeight;

export default function HomeScreen() {
	const authState = useAuthState();
	const navigation = useHomeStackNavigation();

	async function clearAsyncStorage() {
		try {
			await AsyncStorage.clear();
		} catch (e) {
			// clear error
			console.log("error clearing storage");
		}

		console.log("Done.");
	}

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
				<Button title="LogOut" onPress={() => clearAsyncStorage()} />
				<BalanceLists />
			</View>
		</MainScreenView>
	);
}
