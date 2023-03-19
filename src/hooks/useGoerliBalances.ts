import { useEffect, useState } from "react";
import { BalanceItemProps } from "../components/balances/BalanceItem";
import { goerliAlchemy } from "../utils/alchemyConfig";

export const useGoerliBalances = (address: string) => {
	const [loading, setLoading] = useState(true);
	const [balances, setBalances] = useState<BalanceItemProps[]>([]);

	const fetchBalances = async () => {
		// balancesType = {address: string, tokenBalances: array [{contractAddress: string, tokenBalance: string}}]}
		const balances = await goerliAlchemy.core.getTokenBalances(address);

		const nonZeroBalances = balances.tokenBalances.filter((token) => {
			return parseInt(token.tokenBalance!) !== 0;
		});

		let balancesArray: BalanceItemProps[] = [];

		// Loop through all tokens with non-zero balance
		for (let token of nonZeroBalances) {
			// Get balance of token
			let balance = parseInt(token.tokenBalance!);

			// Get metadata of token
			const metadata = await goerliAlchemy.core.getTokenMetadata(
				token.contractAddress
			);

			// Compute token balance in human-readable format
			balance = balance / Math.pow(10, metadata.decimals!);
			balance = parseFloat(balance.toFixed(2));

			const balanceItem: BalanceItemProps = {
				name: metadata.name || "Unknown",
				symbol: metadata.symbol || "Unknown",
				balance: balance,
				address: token.contractAddress,
				token_icon: metadata.logo || "",
			};

			balancesArray.push(balanceItem);
		}

		setBalances(balancesArray);
		setLoading(false);
	};

	fetchBalances();

	return { loading, balances };
};
