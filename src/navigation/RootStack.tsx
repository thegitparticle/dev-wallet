import { NavigationContainer } from "@react-navigation/native";
import { useAuthState } from "../state/authState";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

export default function RootStack() {
	const authState = useAuthState();

	return (
		<NavigationContainer>
			{authState.authDetails.loggedIn ? <HomeStack /> : <AuthStack />}
		</NavigationContainer>
	);
}
