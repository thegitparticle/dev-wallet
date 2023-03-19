import { Image, View, Text } from "dripsy";
import React from "react";

export interface BalanceItemProps {
	token_icon: string;
	symbol: string;
	name: string;
	address: string;
	balance: number;
}

export default function BalanceItem(props: BalanceItemProps) {
	return (
		<View
			variant="layout.child_view_20"
			sx={{ flexDirection: "row", justifyContent: "space-between" }}
		>
			<View sx={{ flexDirection: "row" }}>
				<Image
					source={{ uri: props.token_icon }}
					sx={{ width: 40, height: 40 }}
				/>
				<View sx={{ flexDirection: "column" }}>
					<Text variant="body_large">{props.name}</Text>
					<Text variant="body_large">{props.symbol}</Text>
				</View>
			</View>
			<Text variant="body_large" sx={{ color: "positive" }}>
				{props.balance}
			</Text>
		</View>
	);
}
