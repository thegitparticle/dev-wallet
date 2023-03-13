import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "../state/authState";
import { useLiveWalletsState } from "../state/liveWalletsState";
import {
	setupWalletConnectV1,
	walletConnectV1,
} from "../utils/walletConnectv1Config";
import { web3walletSetup } from "../utils/web3WalletConfig";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

export default function RootStack() {
	const authState = useAuthState();
	const liveWalletsState = useLiveWalletsState();

	web3walletSetup(liveWalletsState.wallets);

	return (
		<NavigationContainer>
			{authState.authDetails.loggedIn ? <HomeStack /> : <AuthStack />}
		</NavigationContainer>
	);
}
