import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ConnectedDappsScreen from "../screens/modals/ConnectedDappsScreen";
import ConnectWalletScreen from "../screens/modals/ConnectWalletScreen";
import MyWalletScreen from "../screens/modals/MyWalletScreen";

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
			<Stack.Screen
				name="MyWalletScreen"
				component={MyWalletScreen}
				options={{
					headerShown: false,
					gestureEnabled: true,
					gestureDirection: "vertical",
					presentation: "modal",
				}}
			/>
			<Stack.Screen
				name="ConnectedDappsScreen"
				component={ConnectedDappsScreen}
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
