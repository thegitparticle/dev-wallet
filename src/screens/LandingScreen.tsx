import { Text, View } from "dripsy";
import { useWindowDimensions } from "react-native";
import { Button, Image, YStack } from "tamagui";
import { AuthScreenView } from "../components/screenviews";
import { useAuthStackNavigation } from "../navigation/types";

export default function LandingScreen() {
	const navigation = useAuthStackNavigation();

	return (
		<AuthScreenView>
			<YStack flex={1} justifyContent="space-between" alignItems="center">
				<View style={{ marginVertical: "10%" }} />
				<YStack justifyContent="center" alignItems="center">
					<Image
						src={require("../../assets/dev-wallet-logo.png")}
						height={30}
						width={useWindowDimensions().width}
						resizeMode="contain"
					/>
					<Text
						variant="body_large"
						sx={{ color: "light", my: "$4" }}
					>
						a no frills wallet for developers
					</Text>
				</YStack>
				<Button
					onPress={() => {
						navigation.navigate("CreateWalletScreen");
					}}
					style={{ marginVertical: "10%" }}
				>
					<Text variant="button_large" sx={{ color: "light" }}>
						create new wallet
					</Text>
				</Button>
			</YStack>
		</AuthScreenView>
	);
}
