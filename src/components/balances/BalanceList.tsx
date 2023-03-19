import { View } from "dripsy";
import BalanceItem, { BalanceItemProps } from "./BalanceItem";

export interface BalanceListProps {
	balanceList: BalanceItemProps[];
}

export default function BalanceList(props: BalanceListProps) {
	return (
		<View sx={{ flexDirection: "column", alignItems: "center" }}>
			{props.balanceList.map((balanceItem, index) => {
				return <BalanceItem key={index} {...balanceItem} />;
			})}
		</View>
	);
}
