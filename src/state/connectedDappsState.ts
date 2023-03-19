import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface ConnectedDappDetails {
	name: string;
	icon: string;
	description: string;
	dappKey: string;
	topic: string;
	url: string;
}

interface ConnectedDappState {
	dapps: ConnectedDappDetails[];
	addDapp: (dapp: ConnectedDappDetails) => void;
	removeDapp: (dapp: ConnectedDappDetails) => void;
	clearDapps: () => void;
}

export const useConnectedDappsState = create<ConnectedDappState>()(
	devtools(
		persist(
			(set) => ({
				dapps: [],
				addDapp: (dapp: ConnectedDappDetails) =>
					set((state) => ({ dapps: [...state.dapps, dapp] })),
				removeDapp: (dapp: ConnectedDappDetails) =>
					set((state) => ({
						dapps: state.dapps.filter((d) => d.id !== dapp.id),
					})),
				clearDapps: () =>
					set({
						dapps: [],
					}),
			}),
			{
				name: "connected-dapps-state",
				storage: createJSONStorage(() => AsyncStorage),
			}
		)
	)
);
