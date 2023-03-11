import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface LiveWalletDetails {
	address: string;
	privateKey: string;
	mnemonicPhrase: string;
}

interface LiveWalletState {
	wallets: LiveWalletDetails[];
	addWallet: (wallet: LiveWalletDetails) => void;
	clearWallets: () => void;
}

export const useLiveWalletsState = create<LiveWalletState>()(
	devtools(
		persist(
			(set) => ({
				wallets: [],
				addWallet: (wallet: LiveWalletDetails) =>
					set((state) => ({ wallets: [...state.wallets, wallet] })),
				clearWallets: () =>
					set({
						wallets: [],
					}),
			}),
			{
				name: "live-wallets-state",
				storage: createJSONStorage(() => AsyncStorage),
			}
		)
	)
);
