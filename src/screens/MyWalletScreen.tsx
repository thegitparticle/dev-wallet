import { Text } from "dripsy";
import { SecondaryScreenView } from "../components/screenviews";
import { useLiveWalletsState } from "../state/liveWalletsState";
import QRCode from "react-native-qrcode-svg";

export default function MyWalletScreen() {
	const liveWalletsState = useLiveWalletsState();

	const mainAddress = liveWalletsState.wallets[0].address;

	return (
		<SecondaryScreenView>
			<Text
				variant="text.body_small"
				sx={{ color: "off_light", my: "$2" }}
			>
				{mainAddress.substring(0, 6) +
					"..." +
					mainAddress.substring(
						mainAddress.length - 4,
						mainAddress.length
					)}
			</Text>
			<QRCode value={mainAddress} />
		</SecondaryScreenView>
	);
}
