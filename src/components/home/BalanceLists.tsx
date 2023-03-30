import { Tabs, H5, XStack } from "tamagui";
import { Text } from "dripsy";
import { Dimensions, ScrollView } from "react-native";
import { useLiveWalletsState } from "../../state/liveWalletsState";
import { useEffect, useState } from "react";
import { goerliAlchemy, mumbaiAlchemy } from "../../utils/alchemyConfig";
import { ethers } from "ethers";
import BalanceList from "../balances/BalanceList";
import { useGoerliBalances } from "../../hooks/useGoerliBalances";
import { useMumbaiBalances } from "../../hooks/useMumbaiBalances";

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

	function GoerliBalances() {
		const { loading, balances } = useGoerliBalances(
			// "0x1239b15ECE331E2eE767710a1953D889B59Ae84c"
			currentWallet.address
		);

		if (loading)
			return (
				<Text
					variant="text.heading_large"
					sx={{ color: "light", my: "$2" }}
					ellipsizeMode="tail"
				>
					loading ...
				</Text>
			);

		return <BalanceList balanceList={balances} />;
	}

	function MumbaiBalances() {
		const { loading, balances } = useMumbaiBalances(
			// "0x1239b15ECE331E2eE767710a1953D889B59Ae84c"
			currentWallet.address
		);

		if (loading)
			return (
				<Text
					variant="text.heading_large"
					sx={{ color: "light", my: "$2" }}
					ellipsizeMode="tail"
				>
					loading ...
				</Text>
			);

		return <BalanceList balanceList={balances} />;
	}

	return (
		<Tabs
			defaultValue="tab1"
			width={dimensions.fullWidth - 40}
			orientation="horizontal"
			style={{ flexDirection: "column" }}
		>
			<Tabs.List space>
				{supportedNetworks.map((network) => {
					return (
						<Tabs.Trigger value={network.name.toLocaleLowerCase()}>
							<Text
								variant="text.heading_large"
								sx={{ color: "light", my: "$2" }}
								ellipsizeMode="tail"
							>
								{network.name}
							</Text>
						</Tabs.Trigger>
					);
				})}
			</Tabs.List>

			<Tabs.Content value="goerli">
				<ScrollView>
					<GoerliBalances />
				</ScrollView>
			</Tabs.Content>
			<Tabs.Content value="mumbai">
				<ScrollView>
					<MumbaiBalances />
				</ScrollView>
			</Tabs.Content>
			<Tabs.Content value="mainnet">
				<Text
					variant="text.heading_large"
					sx={{ color: "light", my: "$2" }}
					ellipsizeMode="tail"
				>
					Tab 3
				</Text>
			</Tabs.Content>
		</Tabs>
	);
}
