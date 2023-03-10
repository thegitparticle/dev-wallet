import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

export default function RootStack() {
	return (
		<NavigationContainer>
			<AuthStack />
		</NavigationContainer>
	);
}
