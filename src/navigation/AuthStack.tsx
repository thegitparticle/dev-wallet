import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateWalletScreen from "../screens/createwallet/CreateWalletScreen";
import ShowSeedPhraseScreen from "../screens/createwallet/ShowSeedPhraseScreen";
import LandingScreen from "../screens/LandingScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="LandingScreen"
				component={LandingScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CreateWalletScreen"
				component={CreateWalletScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ShowSeedPhraseScreen"
				component={ShowSeedPhraseScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
