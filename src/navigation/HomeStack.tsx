import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ConnectWalletScreen from "../screens/ConnectWalletScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ConnectWalletScreen"
				component={ConnectWalletScreen}
				options={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "vertical",
					presentation: "modal",
				}}
			/>
		</Stack.Navigator>
	);
}
