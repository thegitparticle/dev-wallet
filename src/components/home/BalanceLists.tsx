import { Tabs, H5, XStack } from "tamagui";
import { Text } from "dripsy";
import { Dimensions, ScrollView, useWindowDimensions } from "react-native";
import { useLiveWalletsState } from "../../state/liveWalletsState";
import { useEffect, useMemo, useState } from "react";
import { goerliAlchemy, mumbaiAlchemy } from "../../utils/alchemyConfig";
import { ethers } from "ethers";
import BalanceList from "../balances/BalanceList";
import { useGoerliBalances } from "../../hooks/useGoerliBalances";
import { useMumbaiBalances } from "../../hooks/useMumbaiBalances";
import React from "react";
import { TabView, SceneMap } from "react-native-tab-view";

const dimensions = {
	fullHeight: Dimensions.get("window").height,
	fullWidth: Dimensions.get("window").width,
};

const supportedNetworks = [
	{
		name: "Goerli",
	},
	{
		name: "Mumbai",
	},
	// {
	// 	name: "Mainnet",
	// },
];

export default function BalanceLists() {
	const liveWalletsState = useLiveWalletsState();

	const currentWallet = liveWalletsState.wallets[0];

	const GoerliBalances = useMemo(
		() =>
			function Goerli() {
				// const { loading, balances } = useGoerliBalances(
				// 	// "0x1239b15ECE331E2eE767710a1953D889B59Ae84c"
				// 	// currentWallet.address
				// 	""
				// );

				// if (loading)
				// 	return (
				// 		<Text
				// 			variant="text.heading_large"
				// 			sx={{ color: "light", my: "$2" }}
				// 			ellipsizeMode="tail"
				// 		>
				// 			loading ...
				// 		</Text>
				// 	);

				// return <BalanceList balanceList={balances} />;

				useEffect(() => {
					console.log("goerli balances");
				}, []);

				return (
					<Text
						variant="heading_large"
						sx={{ color: "light", my: "$2" }}
						ellipsizeMode="tail"
					>
						goerli balances
					</Text>
				);
			},
		[]
	);

	const MumbaiBalances = useMemo(
		() =>
			function Mumbai() {
				// const { loading, balances } = useMumbaiBalances(
				// 	// "0x1239b15ECE331E2eE767710a1953D889B59Ae84c"
				// 	// currentWallet.address
				// 	""
				// );

				// if (loading)
				// 	return (
				// 		<Text
				// 			variant="text.heading_large"
				// 			sx={{ color: "light", my: "$2" }}
				// 			ellipsizeMode="tail"
				// 		>
				// 			loading ...
				// 		</Text>
				// 	);

				// return <BalanceList balanceList={balances} />;

				useEffect(() => {
					console.log("mumbai balances");
				}, [currentWallet.address]);

				return (
					<Text
						variant="heading_large"
						sx={{ color: "light", my: "$2" }}
						ellipsizeMode="tail"
					>
						mumbai balances
					</Text>
				);
			},
		[]
	);

	const renderScene = SceneMap({
		goerli: GoerliBalances,
		mumbai: MumbaiBalances,
	});

	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: "goerli", title: "Goerli" },
		{ key: "mumbai", title: "Mumbai" },
	]);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width - 40 }}
		/>
	);
}
