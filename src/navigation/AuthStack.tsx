import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
		</Stack.Navigator>
	);
}
