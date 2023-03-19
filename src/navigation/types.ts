import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Auth stack types
export type AuthStackParamList = {
	LandingScreen: undefined;
	CreateWalletScreen: undefined;
	ShowSeedPhraseScreen: undefined;
};

export type AuthStackNavigationProp =
	NativeStackNavigationProp<AuthStackParamList>;

export const useAuthStackNavigation = (): AuthStackNavigationProp =>
	useNavigation<AuthStackNavigationProp>();

//  Home stack types
export type HomeStackParamList = {
	HomeScreen: undefined;
	ConnectWalletScreen: undefined;
	MyWalletScreen: undefined;
	ConnectedDappsScreen: undefined;
};

export type HomeStackNavigationProp =
	NativeStackNavigationProp<HomeStackParamList>;

export const useHomeStackNavigation = (): HomeStackNavigationProp =>
	useNavigation<HomeStackNavigationProp>();
