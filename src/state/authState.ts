import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthDetails {
	address: string;
	loggedIn: boolean;
}

interface AuthState {
	authDetails: AuthDetails;
	setAuthDetails: (authDetails: AuthDetails) => void;
	clearHistory: () => void;
}

export const useAuthState = create<AuthState>()(
	devtools(
		persist(
			(set) => ({
				authDetails: { address: "", loggedIn: false },
				setAuthDetails: (authDetails: AuthDetails) =>
					set({ authDetails: authDetails }),
				clearHistory: () =>
					set({
						authDetails: { address: "", loggedIn: false },
					}),
			}),
			{
				name: "auth-state",
				storage: createJSONStorage(() => AsyncStorage),
			}
		)
	)
);
